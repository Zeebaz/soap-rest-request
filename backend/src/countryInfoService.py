""" importamos zeep para soporte de peticiones SOAP """
import time
from zeep import Client

class CountryInfoService():
    def __init__(self):
        #URL proporcionado con todos los servicios
        self.url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL'
        #objeto tipo cliente referente a la libreria zeep
        self.client = Client(self.url)

    # Metodo para listar paises con su nombre y codigo iso (GET)
    def listOfCountryNamesByCode(self):    
        response = self.client.service.ListOfCountryNamesByCode()
        time.sleep(2.4)
        return response
    
    # Metodo para obtener la capital en base a su codigo iso (POST)
    def fullInformationCountry(self, isoCode):    
        fullInformation = self.client.service.FullCountryInfo(isoCode)
        time.sleep(2.4)
        fullInformationFormat = {
            'sISOCode': str(fullInformation['sISOCode']),
            'sName': str(fullInformation['sName']),
            'sCapitalCity': str(fullInformation['sCapitalCity']),
            'sPhoneCode': str(fullInformation['sPhoneCode']),
            'sContinentCode': str(fullInformation['sContinentCode']),
            'sCurrencyISOCode': str(fullInformation['sCurrencyISOCode']),
            'sCountryFlag': str(fullInformation['sCountryFlag']),
            'Languages': {
                'tLanguage': [
                    {
                        'sISOCode': str(fullInformation['Languages']['tLanguage'][0]['sISOCode']),
                        'sName': str(fullInformation['Languages']['tLanguage'][0]['sName'])
                    }
                ]
            }
        }
        return fullInformationFormat
        
import time
from flask import Flask, request, jsonify
from flask_cors import CORS

#importamos nuestra clase cliente
from src.countryInfoService import CountryInfoService

app = Flask(__name__)
CORS(app)

#inicializamos nuestro objeto
countryInfoService = CountryInfoService()


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/countries", methods =['GET'])
def get_countries():
    # obtenemos el limite y el desplazamiento en los parametros
    args = request.args
    limit = int(args.get('limit')) # inicio
    limit2 =  limit
    limit = limit if limit == 0 else limit -1

    offset = int(args.get('offset')) # desplazamiento
    for_next = limit + offset # link de siguientes

    # listamos los paises con su nombre y codigo iso
    response = countryInfoService.listOfCountryNamesByCode()        
    
    countries_list = []
    for country in response:
        countries_list.append({
            'sISOCode': str(country['sISOCode']),
            'sName': str(country['sName']),
        })

    countries_list = countries_list[limit:for_next]
    
    calc_previous = str(limit2-offset) if limit2-offset >= 0 and limit2-offset != 1 else str(0)
    next  = 'http://127.0.0.1:5000/countries?limit={limit}&offset={offset}'.format(limit = str(for_next+1), offset = offset)
    previous = 'http://127.0.0.1:5000/countries?limit={limit}&offset={offset}'.format(limit = calc_previous, offset = offset)

    time.sleep(2)
    # calc_previous = 
    return jsonify({'results': countries_list,
                    'next': next, 
                    'previous':previous}), 200

@app.route("/countries/<isocode>", methods =['POST'])
def post_country_by_iso(isocode):
    # ejecutamos fullInformationCountry en base a el codigo iso 
    response = countryInfoService.fullInformationCountry(isocode)
    
    return jsonify({'results': response}), 200

if __name__ ==  '__main__':
    app.run(debug=True, port=5000)
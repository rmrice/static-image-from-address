# static-image-from-address

Get a Mapbox Static Image URL from an address using Mapbox's Geocoding API.

### Usage

```
$ node index.js --address <address> --style <style>

ARGUMENTS:
--address [required] address to query (in quotes)
--style [optional] in format username/style -- defaults to mapbox/streets-v11
```

Install:

```bash
npm install
```

Export your mapbox access token:

```bash
export MAPBOX_ACCESS_TOKEN=<token>
```

Run the script:

```bash
$ node index.js --address '3028 emerald chase drive' --style mapbox/satellite-streets-v9

// outputs:
>> http://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/static/-77.399591,38.917827,12/800x800?access_token=pk.eyJ1Ijoicm1yaWNlIiwiYSI6ImNqY3FsM2x6ajM2dHMycW85cWFvemg0bWMifQ.HiBtNtMmWjfS9AdpK9yv3Q
```

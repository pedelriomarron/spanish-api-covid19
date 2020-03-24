<p align="center">
  <img width="500" src="https://raw.githubusercontent.com/pedelriomarron/spanish-api-covid19/master/config/preview.png" />
</p>


# spanish-api-covid19

> Serving data from Datadista as a [JSON API](https://spanish-api-covid19.pedelriomarron.now.sh/)

## Routes

- /api: global summary

- /api/confirmed: global cases per region sorted by confirmed cases

- /api/recovered: global cases per region sorted by recovered cases

- /api/deaths: global cases per region sorted by death toll

- /api/hospitalized: global cases per region sorted by hospitalizations

- /api/uci: global cases per region sorted by UCI patients

- /api/regions: all regions with their INE code

- /api/regions/[region]: a [region] summary (e.g. /api/regions/01 or /api/regions/12)

- /api/regions/[region]/confirmed: a [region] cases per region sorted by confirmed cases

- /api/region/[region]/recovered: a [region] cases per region sorted by recovered cases

- /api/regions/[region]/deaths: a [region] cases per region sorted by death toll

- /api/regions/[region]/hospitalized: a [region] cases per region sorted by hospitalizations

- /api/regions/[region]/uci: a [region] cases per region sorted by UCI patients


## License

MIT License 2020, Pedro Manuel del Río Marrón.

Data updated in real time thanks to the Datadista repository, the data cannot be used for commercial purposes.

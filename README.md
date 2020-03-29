# Neoask

**Neoask** means **neovis** + **flask**. It started as an effort to visualize the data in `neo4j`.
At present, we hope that it can become a simple application skeleton for the so-called _"knowledge graph"_ project.

## TODO

Although it is just a skeleton, it should also show its potential to become a large-scale application in some aspects.

- [ ] Searcher/DataLoader, etc. - What users need is not graph, but knowledge.
- [ ] DashBoard - Understand your architecture and data.
- [ ] API - Standardizing & Supporting the separation of front-end and back-end (?)
- [ ] Better UI - Just change static / template files, for data visualization.
- [ ] Access Control.
- [ ] Others - Basic CMS and Docs. (?)

## Usage

You should have at least `python` and `pipenv` installed before using.

```shell
git clone https://github.com/psiace/neoask.git
cd neoask
mv .env.example .env
pipenv install
flask init-sqlite
```

Change the contents of the `.env` file to configure your own information, of course, you must prepare _**neo4j**_ and your _**data**_ before this.

### For Development

```shell
flask run
```

### For Production

```shell
waitress-serve --call 'neoask.app:create_app'
```

## Contact

Chojan Shang - [@PsiACE](https://github.com/psiace) - <psiace@outlook.com>

Project Link: [https://github.com/psiace/neoask](https://github.com/psiace/neoask)

## License

This project is under the MIT license ([LICENSE](./LICENSE) or <http://opensource.org/licenses/MIT>)

## Credits

The early code came from:

- [flaskr](https://flask.palletsprojects.com/en/1.1.x/tutorial) - The offical tutorial for creating a basic blog application.
- [neovis-flask](https://github.com/aguinaldoabbj/neovis-flask) - Running a basic neovis + flask app in docker.

Major technology stacks:

- [flask](https://flask.palletsprojects.com) - The Python micro framework for building web applications.
- [neovis.js](https://github.com/neo4j-contrib/neovis.js) - Graph visualizations in the browser with data from Neo4j.
- [mvp.css](https://github.com/andybrewer/mvp) - Minimalist stylesheet for HTML elements.

# OneRemote Documentation

The documentation is created using the [mm-docs](https://github.com/majkinetor/mm-docs) documentation bundle.

## Prerequisites

- Docker installation.
  - For Windows Desktop use: `cinst docker-desktop`
- PowerShell (optional)
  - [Invoke-Build](https://www.powershellgallery.com/packages/InvokeBuild) module

## Usage

Within PowerShell use `Invoke-Build` (ib):

|       Command        |                                             Description                                              |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| `ib Build`           | Build static site, always set explicit version env var, for example `$Env:MM_DOCS_VERSION = '0.2.2'` |
| `ib Run -aPort 8888` | Serve static site on port 8888 (default is 8000)<br>This enables concurrent use on several projects  |

Otherwise, run appropriate docker commands:

```sh
export image=majkinetor/mm-docs
export aPort=8888

#build
docker run --rm -v $PWD:/docs8 $image mkdocs build

#serve
docker run --rm -v $PWD:/docs --name docs-$aPort --detach -p $aPort:$aPort $image mkdocs serve --dev-addr 0.0.0.0:$aPort
```

After building it, static site is available at `source\site` directory and it can be served with any kind of web server.

## Adding documents

- Add new markdown somewhere in the `source\docs` directory.
- To be visible in navigation, add to `source\mkdocs.yml` `nav` section, otherwise, the page is available via direct link
- Add footer, header, abbreviations etc. in `source\inc` folder
- Add python function and modules in `source\main.py`
- Override specific mkdocs material theme partials in `source\overrides`
- Configure PDF and single page stuff in `source\pdf`
- Configure extra CSS in `docs\_css\extra.css`

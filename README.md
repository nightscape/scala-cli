
# scala-cli

[![Build status](https://github.com/VirtusLab/scala-cli/workflows/CI/badge.svg)](https://github.com/VirtusLab/scala-ci/actions?query=workflow%3ACI)
[![Maven Central](https://img.shields.io/maven-central/v/org.virtuslab.scala-cli/cli_3.svg)](https://maven-badges.herokuapp.com/maven-central/org.virtuslab.scala-cli/cli_3)
[![Discord](https://img.shields.io/discord/632277896739946517.svg?label=&logo=discord&logoColor=ffffff&color=404244&labelColor=6A7EC2)](https://discord.gg/KzQdYkZZza)

Scala CLI is an experimental tool to run/compile/test Scala that aims at being a better `scala` command. It shares some similarities with build tools, but doesn't aim at supporting multi-module projects, nor to be extended via a task system.

User-facing documentation can be found on our website: [scala-cli.virtuslab.org](https://scala-cli.virtuslab.org/).

## Developer docs

### Requirements

Building Scala CLI requires a JVM 17 to work properly.

In theory, our build is able to download and install for its own needs JVM 17 on some OSes however it may not work in Intellij / Metals out of the box.

The Scala CLI sources ship with Mill launchers, so that Mill itself doesn't need to be installed on your system.

### Common commands

#### Running the CLI from sources

```bash
./mill -i scala …arguments…
```

#### Run unit tests

```bash
./mill 'build-module.test'
```

#### Run integration tests with the JVM launcher

```bash
./mill integration.test.jvm
```

Filter test suites with
```bash
./mill integration.test.jvm 'scala.cli.integration.RunTestsDefault.*'
./mill integration.test.jvm 'scala.cli.integration.RunTestsDefault.Multiple scripts'
```

Pass the `--debug` option to debug integration tests:
```bash
./mill integration.test.jvm 'scala.cli.integration.RunTestsDefault.*' --debug
```

The debug option uses 5005 port by default. It is possible to change it as follows:
```bash
./mill integration.test.jvm 'scala.cli.integration.RunTestsDefault.*' --debug:5006
```

#### Run integration tests with the native launcher

(generating the launcher can take several minutes)

```bash
./mill integration.test.native
```

#### Generate native packages

Build native packagers:
* `deb` for linux
* `msi` for windows
* `dmg` and `pkg` for macOS

(generating native packager for specified format)
```bash
./mill -i scala package ..arguments... --deb --output 'path.deb'
./mill -i scala package ..arguments... --dmg --output 'path.dmg'
./mill -i scala package ..arguments... --pkg --output 'path.pkg'
```

#### Generate Metals configuration files

```bash
./mill mill.contrib.Bloop/install
```

Then run the command "Metals: Connect to build server".

(Recommended over the Metals import project functionality.)

Whenever the build is updated, just do these two steps again.

#### Generate IntelliJ configuration files

```bash
./mill mill.scalalib.GenIdea/idea
```

Then open the scala-cli directory in IntelliJ.

(Recommended over the IntelliJ import project functionality.)

Whenever the build is updated, run the command above again. IntelliJ
should then pick up the new changes.

#### Generate a native launcher

```bash
./mill -i show cli.nativeImage
```

This prints the path to the generated native image.
The file named `scala` at the root of the project should also
be a link to it. (Note that the link is committed and is always there,
whether the files it points at exists or not.)

#### Generate a JVM launcher

```bash
./mill -i show cli.launcher
```

This prints the path to the generated launcher. This launcher is a JAR,
that directly re-uses the class directories of the modules of the project
(so that cleaning up those classes will break the launcher). If this is a
problem (if you wish to run the launcher on another machine or from a
Docker image for example), use a native launcher (see above) or a standalone
JVM one (see below).

#### Generate a standalone JVM launcher

```bash
./mill -i show cli.standaloneLauncher
```

This prints the path to the generated launcher. This launcher is a JAR,
that embeds JARs of the scala-cli modules, and downloads their dependencies
from Maven Central upon first launch (using the coursier cache, just like
a coursier bootstrap).

### Helper projects

A number of features of Scala CLI are managed from external projects, living under
the [`scala-cli` organization](https://github.com/scala-cli) on GitHub. These
projects can be used by Scala CLI as libraries pulled before it's compiled, but also
as binaries. In the latter case, Scala CLI downloads on-the-fly binaries from these
repositories' GitHub release assets, and runs them as external processes.

For example, here are a few external projects used by Scala CLI:
- [scala-js-cli-native-image](https://github.com/scala-cli/scala-js-cli-native-image): provides a binary running the Scala.js linker
- [scala-cli-signing](https://github.com/scala-cli/scala-cli-signing): provides both libraries and binaries to handle PGP concerns in Scala CLI
- [libsodiumjni](https://github.com/scala-cli/libsodiumjni): provides minimal JNI bindings for
[libsodium](https://github.com/jedisct1/libsodium), that is used by Scala CLI to encrypt secrets
uploaded as GitHub repository secrets in the `publish setup` sub-command

For the full list of those projects and their description, see the
[scala-cli repository list](https://github.com/orgs/scala-cli/repositories) and the READMEs
of each of these projects.

The use of external binaries allows to make the Scala CLI binary slimmer and faster
to generate, but also allow to lower memory requirements to generate it (allowing to
generate these binaries on the GitHub-provided GitHub actions hosts).

### Website

The Scala CLI website is built with [Docusaurus](https://v1.docusaurus.io/en/) and uses [Infima](https://infima.dev/docs/layout/spacing) for styling.

Ensure you are using Node >= 14.

#### Generate the website once

```bash
cd website
yarn
yarn build
npm run serve
```

#### Generate the website continuously

```bash
cd website
yarn
yarn run start
```

### Verifying the documentation

We have a built-in tool to validate `.md` files called [Sclicheck](/sclicheck/Readme.md). To check all douments (and this is what we run on CI) run:

```.github/scripts/check_docs.sh```

You can also check single documents or directories using


```
.github/scripts/check_docs.sh <file> <dir>
```

To debug failing document, Sclicheck has build-in following options: `--step` (stop after each command) or `--stopAtFailure` (to stop after a failure). To debug  getting started guide run following command:

```
.github/scripts/check_docs.sh --stopAtFailure docs/getting_started.md
```

## Scala CLI logos

Package with various logos for scala-cli can be found on [google drive](https://drive.google.com/drive/u/1/folders/1M6JeQXmO4DTBeRBKAFJ5HH2p_hbfQnqS)

## Launcher script

There is a script `scala-cli-src` in the repository root that is intended to work exactly like released scala-cli, but using a binary compiled the worktree.
Just add it to your PATH to get the already-released-scala-cli experience.

## Releases

Instructions on how to release - [Release Procedure](https://github.com/VirtusLab/scala-cli/blob/main/.github/release/release-procedure.md)


## Debugging BSP server

The easiest way to debug BSP sever is using `scala-cli-src` script with `--bsp-debug-port 5050` flag (the port should be unique to the workspace where BSP will be debugged). In such case BSP will be launched using local source and will run on JVM. It will also expects a debugger running in the listen mode using provided port (so the initialization of the connection can be debugged). In such case we recommend to have option to auto rerun debugging session off (so there is always a debugger instance ready to be used).
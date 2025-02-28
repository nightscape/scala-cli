---
title: Release notes
sidebar_position: 99
---

# Release notes

## [v0.1.15](https://github.com/VirtusLab/scala-cli/releases/tag/v0.1.15)

## The M1 native launcher is here! (experimental)

We are happy to announce that there is a new dedicated launcher for M1 users. You can find it [here](https://github.com/VirtusLab/scala-cli/releases/download/v0.1.15/scala-cli-aarch64-apple-darwin.gz).

Please note that the `package` sub-command is unstable for this launcher.

Added in [#1396](https://github.com/VirtusLab/scala-cli/pull/1396) by [@lwronski](https://github.com/lwronski)

## `--python` option for `repl` sub-command (experimental)

Passing the `--python` option allows using `ScalaPy` with the `repl` sub-command:

```
▶ scala-cli --python
Welcome to Scala 3.2.0 (17.0.2, Java OpenJDK 64-Bit Server VM).
Type in expressions for evaluation. Or try :help.
                                                                                
scala> import me.shadaj.scalapy.py
                                                                                
scala> py.Dynamic.global.range(1, 4)
val res0: me.shadaj.scalapy.py.Dynamic = range(1, 4)
```

Added in [#1336](https://github.com/VirtusLab/scala-cli/pull/1336) by [@alexarchambault](https://github.com/alexarchambault)

## `-d`, `-classpath` and `compile` sub-command's `--output` options changes

To be backward compatible with the `scala` command, some changes have been made to the following options:
* The `compile` sub-command's  `--output` option has been renamed to `--compilation-output`. This option is now also available from the `run` and `package` sub-commands.

```
▶ scala-cli compile Hello.scala --compilation-output out
▶ scala-cli --main-class Hello -classpath out
Hello
```

* The `-d` option is no longer an alias for `--dependency`, but for `--compilation-output`. 
  * `-O -d -O path/to/compilation/output` now defaults to `-d path/to/compilation/output`.

```
▶ scala-cli compile Hello.scala -d out
▶ scala-cli --main-class Hello -classpath out
Hello
```

* The old `--classpath` option has been renamed to `--print-classpath`.
  *  `--classpath`, `--class-path` and `-classpath` options are now aliases for the `--extra jars` option.
  * `-O -classpath -O path/to/classpath` now defaults to `--extra-jars path/to/classpath`.

```
▶ scala-cli compile --print-classpath Hello.scala
# ~/Projects/debug-test/.scala-build/project_103be31561_103be31561-7a1ed8dde0/classes/main:~/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala3-library_3/3.2.0/scala3-library_3-3.2.0.jar:~/Library/Caches/ScalaCli/local-repo/v0.1.15/org.virtuslab.scala-cli/runner_3/0.1.15/jars/runner_3.jar:~/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.8/scala-library-2.13.8.jar
```

Added in [#1340](https://github.com/VirtusLab/scala-cli/pull/1340) by [@Gedochao](https://github.com/Gedochao)

## Make inputs optional when `-classpath` and `--main-class` are passed

The following changes have been made to improve backward compatibility with the `scala` command:
* Passing the `--main-class` option along with `-classpath` to the default command now defaults to `run` instead of `repl`:

```
▶ scala-cli --main-class Hello -classpath out
Hello
```

* If the `run` sub-command is passed explicitly, it's sufficient to have a main class on the classpath (inputs aren't necessary then):

```
▶ scala-cli compile Hello.scala -d out
▶ scala-cli run -classpath out 
Hello
```

Added in [#1369](https://github.com/VirtusLab/scala-cli/pull/1369) by [@Gedochao](https://github.com/Gedochao)

## Debugging with the `run` and `test` sub-commands

It is now possible to debug code ran by `run` and `test` sub-commands:

```
▶ scala-cli Main.scala --debug
Listening for transport dt_socket at address: 5005
Hello
```

This addresses [#1212](https://github.com/VirtusLab/scala-cli/issues/1212)

Added in [#1389](https://github.com/VirtusLab/scala-cli/pull/1389) by [@wleczny](https://github.com/wleczny)

## `--platform` option

This option can be used to choose the platform, which should be used to compile and run the application.

```
▶ scala-cli Main.scala --platform js
Hello
```

Note that `--platform js` is an alias for `--js` and `--platform native` is an alias for `--native`.

This addresses [#1214](https://github.com/VirtusLab/scala-cli/issues/1214)

Added in [#1347](https://github.com/VirtusLab/scala-cli/pull/1347) by [@wleczny](https://github.com/wleczny)

## Other changes

### Fixes

* Ensure directories are created recursively when the `package` sub-command is called by [@Gedochao](https://github.com/Gedochao) in [#1371](https://github.com/VirtusLab/scala-cli/pull/1371)
* Fix calculation of Scala version and turn off the `-release` flag for 2.12.x < 2.12.5 by [@Gedochao](https://github.com/Gedochao) in [#1377](https://github.com/VirtusLab/scala-cli/pull/1377)
* Fix finding main classes in external jars by [@Gedochao](https://github.com/Gedochao) in [#1380](https://github.com/VirtusLab/scala-cli/pull/1380)
* Fix Js split style SmallModulesFor in pure JVM by [@lwronski](https://github.com/lwronski) in [#1394](https://github.com/VirtusLab/scala-cli/pull/1394)

### Build and internal changes

* Remove mill-scalafix customization by [@alexarchambault](https://github.com/alexarchambault) in [#1360](https://github.com/VirtusLab/scala-cli/pull/1360)
* Split config db stuff to a separate config module by [@alexarchambault](https://github.com/alexarchambault) in [#1367](https://github.com/VirtusLab/scala-cli/pull/1367)
* Detect sip when installed by coursier by [@lwronski](https://github.com/lwronski) in [#1368](https://github.com/VirtusLab/scala-cli/pull/1368)
* Create empty class to enforce resolving ivy deps by mill for dummy modules by [@lwronski](https://github.com/lwronski) in [#1374](https://github.com/VirtusLab/scala-cli/pull/1374)
* Use millw launcher instead of running mill by cs by [@lwronski](https://github.com/lwronski) in [#1375](https://github.com/VirtusLab/scala-cli/pull/1375)
* Add --debug option for integration tests by [@wleczny](https://github.com/wleczny) in [#1378](https://github.com/VirtusLab/scala-cli/pull/1378)
* NIT ScalaVersionUtil refactor by [@Gedochao](https://github.com/Gedochao) in [#1384](https://github.com/VirtusLab/scala-cli/pull/1384)
* Make config module compatible with Java 8 by [@alexarchambault](https://github.com/alexarchambault) in [#1387](https://github.com/VirtusLab/scala-cli/pull/1387)
* Add HTTP proxy-related keys in config module by [@alexarchambault](https://github.com/alexarchambault) in [#1388](https://github.com/VirtusLab/scala-cli/pull/1388)
* Add repositories-related keys in config module by [@alexarchambault](https://github.com/alexarchambault) in [#1395](https://github.com/VirtusLab/scala-cli/pull/1395)

### Updates

* Update scala-cli.sh launcher for 0.1.14 by [@github-actions](https://github.com/features/actions) in [#1362](https://github.com/VirtusLab/scala-cli/pull/1362)
* Update jsoniter-scala-core_2.13 to 2.17.3 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1364](https://github.com/VirtusLab/scala-cli/pull/1364)
* Update core_2.13 to 3.8.0 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1365](https://github.com/VirtusLab/scala-cli/pull/1365)
* Bump VirtusLab/scala-cli-setup from 0.1.13 to 0.1.14.1 by [@dependabot](https://docs.github.com/en/code-security/dependabot) in [#1376](https://github.com/VirtusLab/scala-cli/pull/1376)

**Full Changelog**: https://github.com/VirtusLab/scala-cli/compare/v0.1.14...v0.1.15

## [v0.1.14](https://github.com/VirtusLab/scala-cli/releases/tag/v0.1.14)

## Hotfix printing stacktraces from Scala CLI runner for Scala 3.x < 3.2.0
We fixed a nasty bug breaking any Scala CLI run using any Scala 3 version earlier than 3.2.0 on printing stacktraces.
Only Scala CLI 0.1.13 was affected.
```
$ scala-cli about
Scala CLI version: 0.1.13
Scala version (default): 3.2.0
$ scala-cli -S 3.1.3 -e 'throw Exception("Broken")'
Compiling project (Scala 3.1.3, JVM)
Compiled project (Scala 3.1.3, JVM)
Exception in thread "main" java.lang.NoSuchMethodError: 'long scala.runtime.LazyVals$.getOffsetStatic(java.lang.reflect.Field)'
        at scala.cli.runner.StackTracePrinter.<clinit>(StackTracePrinter.scala:101)
        at scala.cli.runner.StackTracePrinter$.coloredStackTraces(StackTracePrinter.scala:104)
        at scala.cli.runner.StackTracePrinter$.$lessinit$greater$default$4(StackTracePrinter.scala:11)
        at scala.cli.runner.Runner$.main(Runner.scala:18)
        at scala.cli.runner.Runner.main(Runner.scala)
```
Added in [#1358](https://github.com/VirtusLab/scala-cli/pull/1358) by [@romanowski](https://github.com/romanowski)

### Build and internal changes
* Disable mill-scala-cli for now by [@alexarchambault](https://github.com/alexarchambault) in [#1335](https://github.com/VirtusLab/scala-cli/pull/1335)
* Update scala-cli.sh launcher for 0.1.13 by [@github-actions](https://github.com/features/actions) in [#1351](https://github.com/VirtusLab/scala-cli/pull/1351)
* Remove backslash which skip execution of `mv` command by [@lwronski](https://github.com/lwronski) in [#1353](https://github.com/VirtusLab/scala-cli/pull/1353)
* Fix import ordering by [@alexarchambault](https://github.com/alexarchambault) in [#1359](https://github.com/VirtusLab/scala-cli/pull/1359)

### Updates
* Update scalafix stuff… by [@alexarchambault](https://github.com/alexarchambault) in [#1333](https://github.com/VirtusLab/scala-cli/pull/1333)
* Bump VirtusLab/scala-cli-setup from 0.1.12 to 0.1.13 by [@dependabot](https://docs.github.com/en/code-security/dependabot) in [#1354](https://github.com/VirtusLab/scala-cli/pull/1354)


**Full Changelog**: https://github.com/VirtusLab/scala-cli/compare/v0.1.13...v0.1.14


## [v0.1.13](https://github.com/VirtusLab/scala-cli/releases/tag/v0.1.13)

## Change the default sub-command to `repl` when no args are passed

We no longer default to the `help` sub-command when no arguments are passed. Starting with `0.1.13` running  Scala CLI with no args will launch the `repl`.

```
$ scala-cli -S 3
Welcome to Scala 3.1.3 (17.0.3, Java OpenJDK 64-Bit Server VM).
Type in expressions for evaluation. Or try :help.

scala> 
```

When inputs are provided, Scala CLI defaults to the `run` sub-command, as before.

```
$ cat hello.sc
println("Hello World")
$ scala-cli hello.sc
Hello World
```

This change was added by [@Gedochao](https://github.com/Gedochao) in [#1268]( https://github.com/VirtusLab/scala-cli/pull/1268)

## Marking the project's workspace root with the `project.settings.scala` file

Scala CLI now supports marking the workspace root directory with an optional configuration file: `project.settings.scala`.  The workspace root determines where the `.bsp` and `.scala-build` directories will be saved (which mostly affects what path should be opened in your IDE to import the Scala CLI project through BSP).

The settings file is also the recommended input for your project's `using directives`. Otherwise, it functions similarly to other `.scala` sources.

```
$ cat project.settings.scala
//> using scala "2.13.4"
$ cat hello.sc
println(util.Properties.versionString)
$ scala-cli hello.sc .
version 2.13.4
```

To see how exactly is the root directory resolved, see [this document](https://github.com/VirtusLab/scala-cli/blob/932c942b78bc35fc0906f2f9e2f6a0c56bef712b/website/docs/reference/root-dir.md)

Added in [#1260]( https://github.com/VirtusLab/scala-cli/pull/1260) by [@wleczny](https://github.com/wleczny)

## Scala CLI is now built with Scala 3.2.0

We now rely on Scala `3.2.0` as the default internal Scala version used to build the project.

This change was added by [@lwronski](https://github.com/lwronski) in [#1314](https://github.com/VirtusLab/scala-cli/pull/1314)

## Add resources support for Scala Native

Scala CLI now allows embedding resources (by default) in a Scala Native binary with the `--native` flag.

```
$ cat resources/scala-native/foo.c 
int foo(int i) {
  return i + 42;
}
$ cat hello.scala 
//> using platform "native"
//> using resourceDir "resources"

import scalanative.unsafe.*

@extern
def foo(int: CInt): CInt = extern

@main def main =
  println(foo(3))
$ scala-cli hello.scala --native 
45
```

Added in [#812]( https://github.com/VirtusLab/scala-cli/pull/812) by [@jchyb](https://github.com/jchyb)

##  Default to the `run` sub-command instead of `repl` when the `-e`, `--execute-script`, `--execute-scala` or `--execute-java` options are passed.

Even though we default to the `repl` sub-command when no arguments are passed to Scala CLI, an exception to that rule is when a snippet is passed with one of the following options: `-e`, `--execute-script`, `--execute-scala` or `--execute-java`. In that case, the passed snippets are treated as inputs to be executed and switch the default to the `run` sub-command.
```
$ scala-cli -e 'println("Hello")'
Hello
```

If you still want to pass a snippet to the `repl`, you can either pass the `repl` sub-command explicitly or use one of the following options, as before: `--script-snippet`, `--scala-snippet` or `--java-snippet`.
```
$ scala-cli --script-snippet 'println("Hello")'
Welcome to Scala 3.1.3 (17.0.2, Java OpenJDK 64-Bit Server VM).
Type in expressions for evaluation. Or try :help.
                                                                                                                                                             
scala> snippet_sc.main(Array.empty)
Hello
```
This change was introduced to make the `-e` option backwards compatible with the `scala` command.

Added in [#1313]( https://github.com/VirtusLab/scala-cli/pull/1313) by [@Gedochao](https://github.com/Gedochao)

## Work in progress

### Support for Markdown (experimental)

Scala CLI can now accept `.md` inputs and run/compile a snippet of Scala code inside the markdown. Markdown sources are ignored by default unless passed explicitly as inputs. You can also enable including non-explicit `.md` inputs by passing the `--enable-markdown` option.

Plain `scala` snippets are treated similarly to `.sc` scripts which can be run by `scala-cli`:

````markdown
$ cat Example.md
This is a simple example of an `.md` file with a Scala snippet.

```scala
val message = "Hello from Markdown"
println(message)
```
````

```
scala-cli Example.md
Hello from Markdown
```

See [this document](https://github.com/VirtusLab/scala-cli/blob/5f15ada41fbdcce9b9efd93bd63d513e3476a69a/website/docs/guides/markdown.md) for more details about the experimental Markdown support.

Added in [#1268]( https://github.com/VirtusLab/scala-cli/pull/1268) by [@Gedochao](https://github.com/Gedochao)

## Add `--python` option for the `run` sub-command (experimental)

The `run` sub-command can now run ScalaPy when the `--python` option is passed.

```
$ cat helloscalapy.sc
import py.SeqConverters
val len = py.Dynamic.global.len(List(0, 2, 3).toPythonProxy)
println(s"Length is $len")
$ scala-cli helloscalapy.sc --python -S 2.13
Length is 3
```

Added in [#1295]( https://github.com/VirtusLab/scala-cli/pull/1295) by [@alexarchambault](https://github.com/alexarchambault)

## Other changes

#### Documentation

* Correct using directives on configuration.md by [@megri](https://github.com/megri) in [#1278](https://github.com/VirtusLab/scala-cli/pull/1278)
* Improve dependencies doc by [@Gedochao](https://github.com/Gedochao) in [#1287](https://github.com/VirtusLab/scala-cli/pull/1287)

### Fixes

* Fix path to sourceMappingURL by [@lwronski](https://github.com/lwronski) in [#1286](https://github.com/VirtusLab/scala-cli/pull/1286)

#### Build and internal changes

* Improve the error message for when a build's main class is ambiguous by [@Gedochao](https://github.com/Gedochao) in [#1323](https://github.com/VirtusLab/scala-cli/pull/1323)
* Improve the error message for unsupported Scala version with Ammonite by [@Gedochao](https://github.com/Gedochao) in [#1327](https://github.com/VirtusLab/scala-cli/pull/1327)
* Detect ARM64 macs when downloading coursier launcher by [@keynmol](https://github.com/keynmol) in  [#1282](https://github.com/VirtusLab/scala-cli/pull/1282)
* Make test("...".only) work again in RunTestDefinitions by [alexarchambault](https://github.com/alexarchambault) in [#1294](https://github.com/VirtusLab/scala-cli/pull/1294)
* Use os-lib short-hand method trim when possible by [alexarchambault](https://github.com/alexarchambault) in [#1334](https://github.com/VirtusLab/scala-cli/pull/1334)
* Add missing repl tests by [alexarchambault](https://github.com/alexarchambault) in [#1332](https://github.com/VirtusLab/scala-cli/pull/1332)
* Scala CLI deb package - Priority and Section flag by [@lwronski](https://github.com/lwronski) in [#1338](https://github.com/VirtusLab/scala-cli/pull/1338)

#### Updates

* Update ammonite to 2.5.4-16-7317286d by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1283](https://github.com/VirtusLab/scala-cli/pull/1283)
* Update mill-main to 0.10.7 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1284](https://github.com/VirtusLab/scala-cli/pull/1284)
* Update scalajs-env-nodejs_2.13 to 1.4.0 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1303](https://github.com/VirtusLab/scala-cli/pull/1303)
* Update jsoniter-scala-core_2.13 to 2.16.0 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1302](https://github.com/VirtusLab/scala-cli/pull/1302)
* Update core_2.13 to 3.7.6 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1299](https://github.com/VirtusLab/scala-cli/pull/1299)
* Update ammonite to 2.5.4-19-cd76521f by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1298](https://github.com/VirtusLab/scala-cli/pull/1298)
* Update bsp4j to 2.1.0-M1 by [@lwronski](https://github.com/lwronski) in [#1277](https://github.com/VirtusLab/scala-cli/pull/1277)
* Bump VirtusLab/scala-cli-setup from 0.1.11 to 0.1.12 by [@dependabot](https://docs.github.com/en/code-security/dependabot) in [#1306](https://github.com/VirtusLab/scala-cli/pull/1306)
* Update jsoniter-scala-core_2.13 to 2.17.0 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1311](https://github.com/VirtusLab/scala-cli/pull/1311)
* Update test-runner, tools to 0.4.7 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1317](https://github.com/VirtusLab/scala-cli/pull/1317)
* Update jsoniter-scala-core_2.13 to 2.17.1 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1320](https://github.com/VirtusLab/scala-cli/pull/1320)
* Update ammonite_3.1.3 to 2.5.4-22-4a9e6989 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1329](https://github.com/VirtusLab/scala-cli/pull/1329)
* Update jsoniter-scala-core_2.13 to 2.17.2 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1343](https://github.com/VirtusLab/scala-cli/pull/1343)
* Update python-native-libs to 0.2.4 by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1341](https://github.com/VirtusLab/scala-cli/pull/1341)
* Update org.eclipse.jgit to 6.3.0.202209071007-r by [@scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1344](https://github.com/VirtusLab/scala-cli/pull/1344)

## New Contributors
* [@megri](https://github.com/megri) made their first contribution in [#1278](https://github.com/VirtusLab/scala-cli/pull/1278)
* [@keynmol](https://github.com/keynmol) made their first contribution in [#1282](https://github.com/VirtusLab/scala-cli/pull/1282)

**Full Changelog**: https://github.com/VirtusLab/scala-cli/compare/v0.1.12...v0.1.13


## [v0.1.12](https://github.com/VirtusLab/scala-cli/releases/tag/v0.1.12)

### Add `--spark`, `--spark-standalone` and `--hadoop` options for the `run` sub-command
The `run` sub-command can now run Spark jobs when the `--spark` option is passed.
```text
$ scala-cli run --spark SparkJob.scala
```
Similarly, it's possible to run Hadoop jobs by passing the `--hadoop` option.
```text
scala-cli run --hadoop HadoopJob.java
```
It's also possible to run Spark jobs without a Spark distribution by passing the `--spark-standalone` option.
```text
$ scala-cli run --spark-standalone SparkJob.scala
```

Added in [#1129](https://github.com/VirtusLab/scala-cli/pull/1129) by [alexarchambault](https://github.com/alexarchambault)

### Add the default Scala version to the output of the `version` sub-command
The `version` sub-command now includes both the Scala CLI version and the default Scala version.
```text
$ scala-cli --version
Scala CLI version 0.1.12
Default Scala version: 3.1.3
$ scala-cli -version
Scala CLI version 0.1.12
Default Scala version: 3.1.3
$ scala-cli version
Scala CLI version 0.1.12
Default Scala version: 3.1.3
```
You can also pass the `--cli-version` option to only get the Scala CLI version or the `--scala-version` option
to only get the default Scala version.
```text
$ scala-cli version --cli-version
0.1.12
$ scala-cli version --scala-version
3.1.3
```
This is potentially a breaking change if your automation relies on the output of the `version` sub-command.

Added in [#1262](https://github.com/VirtusLab/scala-cli/pull/1262) by [lwronski](https://github.com/lwronski)

### Enable passing the `scalafmt` configuration with `--scalafmt-conf` and `--scalafmt-conf-str`
It is now possible to pass a custom location of the `scalafmt` configuration with the `--scalafmt-conf` option for the
`fmt` sub-command.
```text
$ scala-cli fmt --scalafmt-conf path/to/the/conf/.scalafmt.conf
```
You can also pass the configuration straight from the terminal with `--scalafmt-conf-str`.
```text
$ scala-cli fmt --scalafmt-conf-str  "version=3.5.5                                   
runner.dialect=scala213"
```
Added in [#1227](https://github.com/VirtusLab/scala-cli/pull/1227) by [wleczny](https://github.com/wleczny)

### Enable turning the `--interactive` mode on permanently
It is now possible to set the `--interactive` mode on by default, so that passing it explicitly isn't necessary.

The next time when you run a command with the `--interactive` option set to on, Scala CLI will suggest to turn it on
permanently. 

This is recommended for environments where `scala-cli` is used by a human user only (and not by any automation).

```text
$ scala-cli . --interactive
You have run the current scala-cli command with the --interactive mode turned on.
Would you like to leave it on permanently?
[0] Yes
[1] No
0
--interactive is now set permanently. All future scala-cli commands will run with the flag set to true.
If you want to turn this setting off at any point, just run `scala-cli config interactive false`.
Found several main classes. Which would you like to run?
[0] ScalaMainClass2
[1] ScalaMainClass1
[2] scripts.ScalaScript_sc
```

You can also configure it manually with the `config` sub-command, by setting the `interactive` property to `true`.
```text
$ scala-cli config interactive true
```
Added in [#1238](https://github.com/VirtusLab/scala-cli/pull/1238) by [Gedochao](https://github.com/Gedochao)

## Other changes

### Work in progress
* Actionable diagnostics by [lwronski](https://github.com/lwronski) in [#1229](https://github.com/VirtusLab/scala-cli/pull/1229)

#### [SIP-46](https://github.com/scala/improvement-proposals/pull/46)-related
* Restrict directives based on the command used by [romanowski](https://github.com/romanowski) in [#1259](https://github.com/VirtusLab/scala-cli/pull/1259)

#### Documentation
* NIT Improve some website docs by [BlackAnubis7](https://github.com/BlackAnubis7) in [#1243](https://github.com/VirtusLab/scala-cli/pull/1243)

#### Build and internal changes
* Add 0.1.11 release notes to release_notes.md by [BlackAnubis7](https://github.com/BlackAnubis7) in [#1228](https://github.com/VirtusLab/scala-cli/pull/1228)
* Temporary disable test gif by [lwronski](https://github.com/lwronski) in [#1261](https://github.com/VirtusLab/scala-cli/pull/1261)
* aarch64 fixes by [alexarchambault](https://github.com/alexarchambault) in [#1180](https://github.com/VirtusLab/scala-cli/pull/1180)

#### Updates
* Update mill launcher by [alexarchambault](https://github.com/alexarchambault) in [#1269](https://github.com/VirtusLab/scala-cli/pull/1269)
* Update scala-cli.sh launcher for 0.1.11 by [github-actions](https://github.com/features/actions) in [#1230](https://github.com/VirtusLab/scala-cli/pull/1230)
* Update jsoniter-scala-core_2.13 to 2.13.39 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1239](https://github.com/VirtusLab/scala-cli/pull/1239)
* Update trees_2.13 to 4.5.12 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1242](https://github.com/VirtusLab/scala-cli/pull/1242)
* Update jsoniter-scala-core_2.13 to 2.14.2 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1241](https://github.com/VirtusLab/scala-cli/pull/1241)
* Update org name to VirtusLab for downloading scalafmt-native-image by [lwronski](https://github.com/lwronski) in [#1253](https://github.com/VirtusLab/scala-cli/pull/1253)
* Update core_2.13 to 3.7.4 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1247](https://github.com/VirtusLab/scala-cli/pull/1247)
* Update case-app_2.13 to 2.1.0-M15 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1245](https://github.com/VirtusLab/scala-cli/pull/1245)
* Update jsoniter-scala-core_2.13 to 2.15.0 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1246](https://github.com/VirtusLab/scala-cli/pull/1246)
* Update cli-options_2.13, cli_2.13, ... to 0.1.8 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1248](https://github.com/VirtusLab/scala-cli/pull/1248)
* Update metaconfig-typesafe-config to 0.11.1 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1254](https://github.com/VirtusLab/scala-cli/pull/1254)
* Update ammonite to 2.5.4-14-dc4c47bc by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1255](https://github.com/VirtusLab/scala-cli/pull/1255)
* Update coursier-jvm_2.13, ... to 2.1.0-M6-53-gb4f448130 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1256](https://github.com/VirtusLab/scala-cli/pull/1256)
* Update scala-packager-cli_2.13, ... to 0.1.27 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1258](https://github.com/VirtusLab/scala-cli/pull/1258)
* Update bloop-config_2.13 to 1.5.3-sc-1 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1257](https://github.com/VirtusLab/scala-cli/pull/1257)
* Update ammonite to 2.5.4-15-f4a8969b by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1264](https://github.com/VirtusLab/scala-cli/pull/1264)
* Update trees_2.13 to 4.5.13 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1265](https://github.com/VirtusLab/scala-cli/pull/1265)
* Update slf4j-nop to 2.0.0 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1273](https://github.com/VirtusLab/scala-cli/pull/1273)
* Update cli-options_2.13, cli_2.13, ... to 0.1.9 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1272](https://github.com/VirtusLab/scala-cli/pull/1272)
* Bump VirtusLab/scala-cli-setup from 0.1.5 to 0.1.11 by [dependabot](https://docs.github.com/en/code-security/dependabot) in [#1274](https://github.com/VirtusLab/scala-cli/pull/1274)

### New Contributors
* [BlackAnubis7](https://github.com/BlackAnubis7) made their first contribution in [#1228](https://github.com/VirtusLab/scala-cli/pull/1228)

**Full Changelog**: https://github.com/VirtusLab/scala-cli/compare/v0.1.11...v0.1.12

## [v0.1.11](https://github.com/VirtusLab/scala-cli/releases/tag/v0.1.11)

### Make `.scalafmt.conf` optional when running the `fmt` command
Scala CLI can now run the `fmt` command without a `.scalafmt.conf` file present. Previously, if such a file was absent, a `Scalafmt requires explicitly specified version.` error was raised while using the `fmt` command.

The Scala CLI `fmt` command now supports passing the `scalafmt` version and dialect directly from the command line, using the `--scalafmt-dialect` and `--scalafmt-version` options respectively:
```
scala-cli fmt --scalafmt-dialect scala3 --scalafmt-version 3.5.8
```
Either of those (or both) can be skipped, which will make Scala CLI infer a default value.

The configuration used can be saved in the workspace by passing the `--save-scalafmt-conf` option.

Added in [#1192](https://github.com/VirtusLab/scala-cli/pull/1192) by [wleczny](https://github.com/wleczny)

### Define `output` option for `package` command with using directives
It is now possible to pass the `output` option of the `package` command with [using directives](/docs/guides/using-directives) instead of passing it directly from bash.

Added in [#1213](https://github.com/VirtusLab/scala-cli/pull/1213) by [wleczny](https://github.com/wleczny)

### Add support for running multiple snippets of the same kind
Scala CLI now allows to pass multiple snippets of the same kind. 

It was previously possible to mix different kinds (so to pass a Java snippet alongside a Scala one), but not for example 2 separate Scala snippets. That limitation no longer applies.

When passed this way, each snippet is then treated as a separate input by Scala CLI.

```text
$ scala-cli --scala-snippet '@main def main() = println(Messages.hello)' --scala-snippet 'object Messages { def hello = "Hello" }'
Hello
```
Added in [#1182](https://github.com/VirtusLab/scala-cli/pull/1182) by [Gedochao](https://github.com/Gedochao)

### Add bloop sub-command
Scala CLI now has a (hidden for now) bloop sub-command, that runs a command using the Scala CLI Bloop server (while the mainline Bloop bloop CLI uses its default Bloop server). This is handy when debugging things on Scala CLI for example, allowing one to manually run scala-cli bloop projects or scala-cli bloop compile.

Added in [#1199](https://github.com/VirtusLab/scala-cli/pull/1199) by [alexarchambault](https://github.com/alexarchambault)

### Make main class optional in preamble-less assemblies
It is now allowed to generate an assembly, even for code that has no main class, when `--preamble=false` is passed. This can be useful for libraries, if users want to pass the assembly to tools such as proguard. This also accepts a (hidden) `--main-class-in-manifest=false` option if users want not only no preamble, but also no mention of main class in the assembly manifest (`META-INF/MANIFEST.MF` in the assembly JAR). The latter option is useful for tools, such as the hadoop jar command, that behave differently depending on the presence or not of a main class in the manifest.

Added in [#1200](https://github.com/VirtusLab/scala-cli/pull/1200) by [alexarchambault](https://github.com/alexarchambault)

### Important fixes & enhancements
#### Prevent erroneous using directives from blocking the initial run of BSP
Up till now, running the `setup-ide` sub-command on sources containing `using directives` with syntax errors or pointing to dependencies which could not be fetched would create a `BSP` setup which could not be imported correctly by IDEs. This is no longer the case and such a `BSP` connection should now import correctly, so that it's possible to fix the faulty code within the comfort of one's IDE of choice.

This fixes [#1097](https://github.com/VirtusLab/scala-cli/issues/1097)

Added in [#1195](https://github.com/VirtusLab/scala-cli/pull/1195) by [Gedochao](https://github.com/Gedochao)

### Work in progress
#### Allow to globally turn actionable diagnostics on or off
It is now possible to globally enable or disable actionable diagnostics using the `config` sub-command.

The relevant configuration is under the `actions` key.
```text
$ scala-cli config actions true
```

Added in [#1193](https://github.com/VirtusLab/scala-cli/pull/1193) by [lwronski](https://github.com/lwronski)

#### Publishing-related features
* Add "publish setup" command by [alexarchambault](https://github.com/alexarchambault) in [#926](https://github.com/VirtusLab/scala-cli/pull/926)

### Other changes
#### Documentation
* Put the release notes doc on the website by [Gedochao](https://github.com/Gedochao) in [#1196](https://github.com/VirtusLab/scala-cli/pull/1196)
* Fix typo in Spark docs by [alexarchambault](https://github.com/alexarchambault) in [#1183](https://github.com/VirtusLab/scala-cli/pull/1183)
* Tweak issue templates & the release procedure by [Gedochao](https://github.com/Gedochao) in [#1188](https://github.com/VirtusLab/scala-cli/pull/1188)
* Add install and uninstall completions documentation by [wleczny](https://github.com/wleczny) in [#1201](https://github.com/VirtusLab/scala-cli/pull/1201)

#### Build and internal changes
* ignore *.semanticdb files by [mtk](https://github.com/mtk) in [#1187](https://github.com/VirtusLab/scala-cli/pull/1187)
* Update scala-cli.sh launcher for 0.1.10 by [github-actions](https://github.com/features/actions) in [#1185](https://github.com/VirtusLab/scala-cli/pull/1185)
* Force push updating scala-cli in scala-cli-setup by [lwronski](https://github.com/lwronski) in [#1189](https://github.com/VirtusLab/scala-cli/pull/1189)
* Fix running scala check in scala native by [lwronski](https://github.com/lwronski) in [#1190](https://github.com/VirtusLab/scala-cli/pull/1190)
* Use manifest JARs in "run" command if needed by [alexarchambault](https://github.com/alexarchambault) in [#1198](https://github.com/VirtusLab/scala-cli/pull/1198)
* Use more lightweight Spark distribs in spark tests by [alexarchambault](https://github.com/alexarchambault) in [#1207](https://github.com/VirtusLab/scala-cli/pull/1207)
* Update GraalVM to 22.2.0 by [alexarchambault](https://github.com/alexarchambault) in [#1208](https://github.com/VirtusLab/scala-cli/pull/1208)
* Split integration tests by [alexarchambault](https://github.com/alexarchambault) in [#1202](https://github.com/VirtusLab/scala-cli/pull/1202)
* Debug macOS CI issue on CI by [alexarchambault](https://github.com/alexarchambault) in [#1215](https://github.com/VirtusLab/scala-cli/pull/1215)
* Update docusaurus to 2.0.0-rc.1 by [lwronski](https://github.com/lwronski) in [#1224](https://github.com/VirtusLab/scala-cli/pull/1224)

#### Updates
* Update core_2.13 to 3.7.0 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1186](https://github.com/VirtusLab/scala-cli/pull/1186)
* Update core_2.13 to 3.7.1 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1194](https://github.com/VirtusLab/scala-cli/pull/1194)
* Update jsoniter-scala-core_2.13 to 2.13.37 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1197](https://github.com/VirtusLab/scala-cli/pull/1197)
* Update jsoniter-scala-core_2.13 to 2.13.38 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1217](https://github.com/VirtusLab/scala-cli/pull/1217)
* Update ammonite to 2.5.4-13-1ebd00a6 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1218](https://github.com/VirtusLab/scala-cli/pull/1218)
* Update core_2.13 to 3.7.2 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1219](https://github.com/VirtusLab/scala-cli/pull/1219)
* Update scala-collection-compat to 2.8.1 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1221](https://github.com/VirtusLab/scala-cli/pull/1221)
* Update trees_2.13 to 4.5.11 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1222](https://github.com/VirtusLab/scala-cli/pull/1222)
* Update coursier-jvm_2.13, ... to 2.1.0-M6-49-gff26f8e39 by [scala-steward](https://github.com/scala-steward-org/scala-steward) in [#1223](https://github.com/VirtusLab/scala-cli/pull/1223)

**Full Changelog**: [https://github.com/VirtusLab/scala-cli/compare/v0.1.10...v0.1.11](https://github.com/VirtusLab/scala-cli/compare/v0.1.10...v0.1.11)


## [v0.1.10](https://github.com/VirtusLab/scala-cli/releases/tag/v0.1.10)

### Initial support for importing other sources via `using` directives

It is now possible to add sources to a Scala CLI project from a source file, with `using file` directives:

```scala
//> using file "Other.scala"
//> using file "extra/"
```

Note that several sources can be specified in a single directive

```scala
//> using file "Other.scala" "extra/"
```

Added in [#1157](https://github.com/VirtusLab/scala-cli/pull/1157) by [lwronski](https://github.com/lwronski).

### Add `dependency update` sub-command

Scala CLI can now update dependencies in user projects, using the `dependency-update` sub-command, like

```text
scala-cli dependency-update --all .
```

When updates are available, this sub-command asks whether to update each of those, right where these dependencies are
defined.

Added in [#1055](https://github.com/VirtusLab/scala-cli/pull/1055) by [lwronski](https://github.com/lwronski).

### Running snippets passed as arguments

Scala CLI can now run Scala or Java code passed on the command-line, via `-e` / `--script-snippet` / `--scala-snippet`
/ `--java-snippet`:

```text
$ scala-cli -e 'println("Hello")'
Hello

$ scala-cli --script-snippet 'println("Hello")'
Hello

$ scala-cli --scala-snippet '@main def run() = println("Hello")' 
Hello

$ scala-cli --java-snippet 'public class Main { public static void main(String[] args) { System.out.println("Hello"); } }'
Hello
```

These options are meant to be substitutes to the `-e` option of the `scala` script that ships in scalac archives.

Added in [#1166](https://github.com/VirtusLab/scala-cli/pull/1166) by [Gedochao](https://github.com/Gedochao).

### Uninstall instructions and `uninstall` sub-command

Uninstalling Scala CLI is now documented in the main installation page, right after the installation instructions. In
particular, when installed via
the [installation script](https://github.com/VirtusLab/scala-cli-packages/blob/main/scala-setup.sh), Scala CLI can be
uninstalled via a newly added `uninstall` sub-command.

Added in [#1122](https://github.com/VirtusLab/scala-cli/pull/1122) and #1152 by [wleczny](https://github.com/wleczny).

### Important fixes & enhancements

#### ES modules

Scala CLI now supports the ES Scala.js module kind, that can be enabled via a `//> using jsModuleKind "esmodule"`
directive, allowing to import other ES modules in particular.

Added in [#1142](https://github.com/VirtusLab/scala-cli/pull/1142)
by [hugo-vrijswijk](https://github.com/hugo-vrijswijk).

#### Putting Java options in assemblies, launchers, and docker images, in `package` sub-command

Passing `--java-opt` and `--java-prop` options to the `package` sub-command is now allowed. The passed options are
hard-coded in the generated assemblies or launchers, and in docker images.

Added in [#1167](https://github.com/VirtusLab/scala-cli/pull/1167) by [wleczny](https://github.com/wleczny).

#### `--command` and `--scratch-dir` options in `run` sub-command

The `run` sub-command can now print the command it would have run, rather than running it. This can be useful for
debugging purposes, or if users want to manually tweak commands right before they are run. Pass `--command` to run to
enable it. This prints one argument per line, for easier automated processing:

```text
$ scala-cli run --command -e 'println("Hello")' --runner=false
~/Library/Caches/Coursier/arc/https/github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.2%252B8/OpenJDK17U-jdk_x64_mac_hotspot_17.0.2_8.tar.gz/jdk-17.0.2+8/Contents/Home/bin/java
-cp
~/Library/Caches/ScalaCli/virtual-projects/ee/project-3c6fdea1/.scala-build/project_ed4bea6d06_ed4bea6d06/classes/main:~/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala3-library_3/3.1.3/scala3-library_3-3.1.3.jar:~/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.8/scala-library-2.13.8.jar
snippet_sc
```

When `run` relies on temporary files (when Scala.js is used for example), one can pass a temporary directory
via `--scratch-dir`, so that temporary files are kept even when `scala-cli` doesn't run anymore:

```text
$ scala-cli run --command -e 'println("Hello")' --js --runner=false --scratch-dir ./tmp
node
./tmp/main1690571004533525773.js
```

Added in [#1163](https://github.com/VirtusLab/scala-cli/pull/1163) by
by [alexarchambault](https://github.com/alexarchambault).

#### Don't put Scala CLI internal modules in packages

Scala CLI doesn't put anymore its stubs module and its "runner" module in generated packages, in the `package`
sub-command.

Fixed in [#1161](https://github.com/VirtusLab/scala-cli/pull/1161)
by [alexarchambault](https://github.com/alexarchambault).

#### Don't write preambles in generated assemblies in the `package` sub-command

Passing `--preamble=false` to `scala-cli package --assembly` makes it generate assemblies without a shell preamble. As a
consequence, these assemblies cannot be made executable, but these look more like "standard" JARs, which is required in
some contexts.

Fixed in [#1161](https://github.com/VirtusLab/scala-cli/pull/1161)
by [alexarchambault](https://github.com/alexarchambault).

#### Don't put some dependencies in generated assemblies in the `package` sub-command

Some dependencies, alongside all their transitive dependencies, can be excluded from the generated assemblies.
Pass `--provided org:name` to `scala-cli package --assembly` to remove a dependency, like

```text
$ scala-cli package SparkJob.scala --assembly --provided org.apache.spark::spark-sql
```

Note that unlike "provided" dependencies in sbt, and compile-time dependencies in Mill, all transitive dependencies are
excluded from the assembly. In the Spark example above, for example, as `spark-sql` depends on `scala-library` (the
Scala standard library), the latter gets excluded from the assembly too (which works fine in the context of Spark jobs).

Fixed in [#1161](https://github.com/VirtusLab/scala-cli/pull/1161)
by [alexarchambault](https://github.com/alexarchambault).

### In progress

#### Experimental Spark capabilities

The `package` sub-command now accepts a `--spark` option, to generate assemblies for Spark jobs, ready to be passed
to `spark-submit`. This option is hidden (not printed in `scala-cli package --help`, only in `--help-full`), and should
be considered experimental.

See [this document](https://github.com/VirtusLab/scala-cli/blob/410f54c01ac5d9cb046461dce07beb5aa008231e/website/src/pages/spark.md)
for more details about these experimental Spark features.

Added in [#1086](https://github.com/VirtusLab/scala-cli/pull/1086)
by [alexarchambault](https://github.com/alexarchambault).

### Other changes

#### Documentation

* Add cookbooks for working with Scala CLI in IDEA IntelliJ by [Gedochao](https://github.com/Gedochao)
  in [#1149](https://github.com/VirtusLab/scala-cli/pull/1149)
* Fix VL branding by [lwronski](https://github.com/lwronski)
  in [#1151](https://github.com/VirtusLab/scala-cli/pull/1151)
* Back port of documentation changes to main by [github-actions](https://github.com/features/actions)
  in [#1154](https://github.com/VirtusLab/scala-cli/pull/1154)
* Update using directive syntax in scenarios by [lwronski](https://github.com/lwronski)
  in [#1159](https://github.com/VirtusLab/scala-cli/pull/1159)
* Back port of documentation changes to main by [github-actions](https://github.com/features/actions)
  in [#1165](https://github.com/VirtusLab/scala-cli/pull/1165)
* Add docs depedency-update by [lwronski](https://github.com/lwronski)
  in [#1178](https://github.com/VirtusLab/scala-cli/pull/1178)
* Add docs how to install scala-cli via choco by [lwronski](https://github.com/lwronski)
  in [#1179](https://github.com/VirtusLab/scala-cli/pull/1179)

#### Build and internal changes

* Update scala-cli.sh launcher for 0.1.9 by [github-actions](https://github.com/features/actions)
  in [#1144](https://github.com/VirtusLab/scala-cli/pull/1144)
* Update release procedure by [wleczny](https://github.com/wleczny)
  in [#1156](https://github.com/VirtusLab/scala-cli/pull/1156)
* chore(ci): add in mill-github-dependency-graph by [ckipp01](https://github.com/ckipp01)
  in [#1164](https://github.com/VirtusLab/scala-cli/pull/1164)
* chore(ci): bump version of mill-github-dependency-graph by [ckipp01](https://github.com/ckipp01)
  in [#1171](https://github.com/VirtusLab/scala-cli/pull/1171)
* Use Scala CLI 0.1.9 in build by [alexarchambault](https://github.com/alexarchambault)
  in [#1173](https://github.com/VirtusLab/scala-cli/pull/1173)
* Stop compiling most stuff with Scala 2 by [alexarchambault](https://github.com/alexarchambault)
  in [#1113](https://github.com/VirtusLab/scala-cli/pull/1113)
* Turn the sip mode also for `scala-cli-sip` binary by [romanowski](https://github.com/romanowski)
  in [#1168](https://github.com/VirtusLab/scala-cli/pull/1168)
* chore(ci): use mill-dependency-submission action by [ckipp01](https://github.com/ckipp01)
  in [#1174](https://github.com/VirtusLab/scala-cli/pull/1174)
* Fix snippet tests for Windows by [Gedochao](https://github.com/Gedochao)
  in [#1172](https://github.com/VirtusLab/scala-cli/pull/1172)

#### Updates

* Update mill-main to 0.10.5 by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1148](https://github.com/VirtusLab/scala-cli/pull/1148)
* Update snailgun-core, snailgun-core_2.13 to 0.4.1-sc2
  by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1155](https://github.com/VirtusLab/scala-cli/pull/1155)
* Update jsoniter-scala-core_2.13 to 2.13.35 by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1169](https://github.com/VirtusLab/scala-cli/pull/1169)
* Update scala-collection-compat to 2.8.0 by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1170](https://github.com/VirtusLab/scala-cli/pull/1170)
* Update jsoniter-scala-core_2.13 to 2.13.36 by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1175](https://github.com/VirtusLab/scala-cli/pull/1175)

### New Contributors

* [hugo-vrijswijk](https://github.com/hugo-vrijswijk) made their first contribution
  in [#1142](https://github.com/VirtusLab/scala-cli/pull/1142)

**Full Changelog**: https://github.com/VirtusLab/scala-cli/compare/v0.1.9...v0.1.10

## [v0.1.9](https://github.com/VirtusLab/scala-cli/releases/tag/v0.1.9)

### `--list-main-classes` for `publish` & `package`

`publish` and `package` sub-commands now support the `--list-main-classes` option, which allows to list all the
available main classes. Previously it was only available in the `run` command.

Added in [#1118](https://github.com/VirtusLab/scala-cli/pull/1118) by [Gedochao](https://github.com/Gedochao)

### Important fixes & enhancements

#### `fmt` options improvement

Added missing documentation on how to pass native `scalafmt` options in the `fmt` sub-command with the `-F` option.

```
$ scala-cli fmt -F --version
scalafmt 3.5.2
```

Additionally, a couple of `scalafmt`'s native options received aliases in Scala CLI:

`--respect-project-filters` is an alias for `-F --respect-project-filters`. Because of the way sources are passed by
Scala CLI to `scalafmt` under the hood, we now turn it on by default to respect any `project.excludePaths` settings in
the user's `.scalafmt.conf`.  
It can be disabled by passing `--respect-project-filters=false` to revert to previous behaviour.
This addresses [#1121](https://github.com/VirtusLab/scala-cli/issues/1121)

`--scalafmt-help` is an alias for `-F --help`. It shows the `--help` output from `scalafmt`, which might prove as
helpful reference when in need of using native `scalafmt` options with `-F`.

Added in [#1135](https://github.com/VirtusLab/scala-cli/pull/1135) by [Gedochao](https://github.com/Gedochao)

#### Include `libsodium.dll` on Windows

Static linking of libsodium in Windows launcher has been fixed.
This addresses [#1114](https://github.com/VirtusLab/scala-cli/issues/1114)

Added in [#1115](https://github.com/VirtusLab/scala-cli/pull/1115)
by [alexarchambault](https://github.com/alexarchambault)

#### Force interactive mode for `update` command

Interactive mode for `update` sub-command is now enabled by default.

Added in [#1100](https://github.com/VirtusLab/scala-cli/pull/1100) by [lwronski](https://github.com/lwronski)

### In progress

#### Publishing-related features

* Publish tweaks + documentation by [alexarchambault](https://github.com/alexarchambault)
  in [#1107](https://github.com/VirtusLab/scala-cli/pull/1107)

#### Better BSP support for Scala scripts

* Add scala-sc language to BSP supported languages by [alexarchambault](https://github.com/alexarchambault)
  in [#1140](https://github.com/VirtusLab/scala-cli/pull/1140)

### Other changes

#### Documentation PRs

* Update scala 2.12 to 2.12.16 in docs by [lwronski](https://github.com/lwronski)
  in [#1108](https://github.com/VirtusLab/scala-cli/pull/1108)
* Back port of documentation changes to main by [github-actions](https://github.com/features/actions)
  in [#1111](https://github.com/VirtusLab/scala-cli/pull/1111)
* Tweak release procedure by [Gedochao](https://github.com/Gedochao)
  in [#1112](https://github.com/VirtusLab/scala-cli/pull/1112)

#### Build and internal changes

* Add choco configuration files by [lwronski](https://github.com/lwronski)
  in [#998](https://github.com/VirtusLab/scala-cli/pull/998)
* Tweaking by [alexarchambault](https://github.com/alexarchambault)
  in [#1105](https://github.com/VirtusLab/scala-cli/pull/1105)
* Add scala-cli-setup deploy key to ssh-agent by [lwronski](https://github.com/lwronski)
  in [#1117](https://github.com/VirtusLab/scala-cli/pull/1117)

#### Updates

* Update scala-cli.sh launcher for 0.1.8 by [github-actions](https://github.com/features/actions)
  in [#1106](https://github.com/VirtusLab/scala-cli/pull/1106)
* Update case-app to 2.1.0-M14 by [alexarchambault](https://github.com/alexarchambault)
  in [#1120](https://github.com/VirtusLab/scala-cli/pull/1120)
* Update Scala to 3.1.3 by [alexarchambault](https://github.com/alexarchambault)
  in [#1124](https://github.com/VirtusLab/scala-cli/pull/1124)
* Update jsoniter-scala-core_2.13 to 2.13.32 by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1125](https://github.com/VirtusLab/scala-cli/pull/1125)
* Update coursier-jvm_2.13, ... to 2.1.0-M6-28-gbad85693f
  by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1126](https://github.com/VirtusLab/scala-cli/pull/1126)
* Update libsodiumjni to 0.0.3 by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1127](https://github.com/VirtusLab/scala-cli/pull/1127)
* Update org.eclipse.jgit to 6.2.0.202206071550-r by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1128](https://github.com/VirtusLab/scala-cli/pull/1128)
* Update Scala.js to 1.10.1 by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1130](https://github.com/VirtusLab/scala-cli/pull/1130)
* Update Scala Native to 0.4.5 by [alexarchambault](https://github.com/alexarchambault)
  in [#1133](https://github.com/VirtusLab/scala-cli/pull/1133)
* Update scala-js-cli to 1.1.1-sc5 by [alexarchambault](https://github.com/alexarchambault)
  in [#1134](https://github.com/VirtusLab/scala-cli/pull/1134)
* Update jsoniter-scala-core_2.13 to 2.13.33 by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1136](https://github.com/VirtusLab/scala-cli/pull/1136)
* Update `scalafmt`  to 3.5.8 by [Gedochao](https://github.com/Gedochao)
  in [#1137](https://github.com/VirtusLab/scala-cli/pull/1137)
* Update cli-options_2.13, cli_2.13, ... to 0.1.7 by [scala-steward](https://github.com/scala-steward-org/scala-steward)
  in [#1138](https://github.com/VirtusLab/scala-cli/pull/1138)

**Full Changelog**: https://github.com/VirtusLab/scala-cli/compare/v0.1.8...v0.1.9

## [v0.1.8](https://github.com/VirtusLab/scala-cli/releases/tag/v0.1.8)

### `--list-main-classes` option for the `run` command

You can pass the option `--list-main-classes` to the `run` command to list all the available main classes, including
scripts.

```
$ scala-cli . --list-main-classes
Hello scripts.AnotherScript_sc scripts.Script_sc
```

Added in [#1095](https://github.com/VirtusLab/scala-cli/pull/1095) by [Gedochao](https://github.com/Gedochao)

### Add `config` command

The `config` sub-command allows to get and set various configuration values, intended for use by
other Scala CLI sub-commands.

This feature has been added in preparation for the `publish` command, stay tuned for future announcements.

Added in [#1056](https://github.com/VirtusLab/scala-cli/pull/1056)
by [alexarchambault](https://github.com/alexarchambault)

### Prioritise non-script main classes

When trying to run a directory containing scripts and just a single non-script main class, the non-script main class
will now be prioritised and run by default.

```
$ scala-cli .
Running Hello. Also detected script main classes: scripts.AnotherScript_sc, scripts.Script_sc
You can run any one of them by passing option --main-class, i.e. --main-class scripts.AnotherScript_sc
All available main classes can always be listed by passing option --list-main-classes
Hello world
```

Changed in [#1095](https://github.com/VirtusLab/scala-cli/pull/1095) by [Gedochao](https://github.com/Gedochao)

### Important bugfixes

#### Accept latest Scala versions despite stale Scala version listings in cache

Scala CLI uses version listings from Maven Central to check if a Scala version is valid. When new Scala versions are
released, users could sometimes have stale version listings in their Coursier cache for a short period of time (the
Coursier cache TTL, which is 24 hours by default). This prevented these users to use new Scala versions during that
time.
To work around that, Scala CLI now tries to re-download version listings when they don't have the requested Scala
version.
This addresses [#1090](https://github.com/VirtusLab/scala-cli/issues/1090)

Fixed in [#1096](https://github.com/VirtusLab/scala-cli/pull/1096) by [lwronski](https://github.com/lwronski)

#### Bloop now uses `JAVA_HOME` by default

Bloop should now pick up the JDK available in `JAVA_HOME`. It was formerly necessary to pass `--bloop-jvm system`
explicitly. This addresses [#1102](https://github.com/VirtusLab/scala-cli/issues/1102)

Fixed in [#1084](https://github.com/VirtusLab/scala-cli/pull/1084) by [lwronski](https://github.com/lwronski)

#### The `-coverage-out` option now accepts relative paths

Scala CLI now correctly processes relative paths when passed to the `-coverage-out` option. Formerly,
the `scoverage.coverage` file would not be properly generated when a relative path was passed.
This addresses [#1072](https://github.com/VirtusLab/scala-cli/issues/1072)

Fixed in [#1080](https://github.com/VirtusLab/scala-cli/pull/1080) by [lwronski](https://github.com/lwronski)

### Other changes

#### Documentation PRs

* Improve scripts guide by [Gedochao](https://github.com/Gedochao)
  in [#1074](https://github.com/VirtusLab/scala-cli/pull/1074)
* Update installation instructions for Nix by [kubukoz](https://github.com/kubukoz)
  in [#1082](https://github.com/VirtusLab/scala-cli/pull/1082)
* Tweak docs by [alexarchambault](https://github.com/alexarchambault)
  in [#1085](https://github.com/VirtusLab/scala-cli/pull/1085)
* Some typos & rewording on the single-module projects use case page by [Baccata](https://github.com/Baccata)
  in [#1089](https://github.com/VirtusLab/scala-cli/pull/1089)

#### Fixes

* Add suffix to project name which contains virtual files by [lwronski](https://github.com/lwronski)
  in [#1070](https://github.com/VirtusLab/scala-cli/pull/1070)

#### Build and internal changes

* Update scala-cli.sh launcher for 0.1.7 by [github-actions](https://github.com/features/actions)
  in [#1076](https://github.com/VirtusLab/scala-cli/pull/1076)
* Tweaking by [alexarchambault](https://github.com/alexarchambault)
  in [#1087](https://github.com/VirtusLab/scala-cli/pull/1087)

**Full Changelog**: https://github.com/VirtusLab/scala-cli/compare/v0.1.7...v0.1.8

## Older versions

The release notes for all the past versions of Scala CLI can be viewed
on [our releases page on GitHub](https://github.com/VirtusLab/scala-cli/releases).

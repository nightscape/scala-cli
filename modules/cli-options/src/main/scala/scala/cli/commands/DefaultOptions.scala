package scala.cli.commands

import caseapp._

// format: off
case class DefaultOptions(
  @Recurse
    shared: SharedOptions = SharedOptions(),
  @Recurse
    sharedRun: SharedRunOptions = SharedRunOptions(),
  @Recurse
    sharedRepl: SharedReplOptions = SharedReplOptions(),
  @Name("-version")
    version: Boolean = false
)
// format: on

object DefaultOptions {
  implicit lazy val parser: Parser[DefaultOptions] = Parser.derive
  implicit lazy val help: Help[DefaultOptions]     = Help.derive

}

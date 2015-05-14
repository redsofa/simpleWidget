#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
testwidget <- function(message, width = NULL, height = NULL) {

  # forward options using x
  x = list(
    message = message

  )

  # create widget
  htmlwidgets::createWidget(
    name = 'testwidget',
    x,
    width = width,
    height = height,
    package = 'testwidget'
  )
}

#' Widget output function for use in Shiny
#'
#' @export
testwidgetOutput <- function(outputId, width = '100%', height = '400px'){
  shinyWidgetOutput(outputId, 'testwidget', width, height, package = 'testwidget')
}

#' Widget render function for use in Shiny
#'
#' @export
renderTestwidget <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, testwidgetOutput, env, quoted = TRUE)
}

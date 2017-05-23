function validateInput(regex, helpId, helpMsg) {
  if (regex) {
    $(helpId).html("");
  } else if (regex == false) {
    $(helpId).html(helpMsg);
  }
}

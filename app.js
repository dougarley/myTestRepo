var mainWindow = Ti.UI.createWindow({
  backgroundColor : '#fafafa'
});

var mainLabel = Ti.UI.createLabel({
  text : 'This is my main label'
});

mainWindow.add(mainLabel);
mainWindow.open();

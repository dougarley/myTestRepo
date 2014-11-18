var mainWindow = Ti.UI.createWindow({
  backgroundColor : '#f00'
});

var mainLabel = Ti.UI.createLabel({
  text : 'This is my main label'
});


var mainButton = Ti.UI.createButton({
  title : 'Do something!'
})

mainWindow.add(mainLabel);
mainWindow.add(mainButton);
mainWindow.open();

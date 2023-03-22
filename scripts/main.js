console.log("I'm here");

const body = document.querySelector('body');

// ----------------------------------------------------------------------------
// Button Widget 
//-----------------------------------------------------------------------------

const buttonContainer = document.createElement('div');
buttonContainer.style.position = 'absolute';
buttonContainer.style.top = '100px';
buttonContainer.style.left = '5px';
buttonContainer.style.float = 'left';
buttonContainer.style.width = '100%';
buttonContainer.style.color = 'transparent';
buttonContainer.style.textAlign = 'center';
buttonContainer.style.cursor = 'pointer';
buttonContainer.style.width = `100px`;
buttonContainer.style.height = `100px`;
body.appendChild(buttonContainer);

// -- Create Buttons for our containers -------------------------------------

var b_loadConveyance = document.createElement("button");
b_loadConveyance.innerHTML = "Lesson Plans";
b_loadConveyance.className = "btn btn-secondary mb-2";
b_loadConveyance.style.width = '100%';
b_loadConveyance.style.height = '60px';
buttonContainer.appendChild(b_loadConveyance);

var b_visualization = document.createElement("button");
b_visualization.innerHTML = "Gradebook";
b_visualization.className = "btn btn-secondary mb-2";
b_visualization.style.width = '100%';
b_visualization.style.height = '60px';
buttonContainer.appendChild(b_visualization);

var b_history = document.createElement("button");
b_history.innerHTML = "Learning";
b_history.className = "btn btn-secondary mb-2";
b_history.style.width = '100%';
b_history.style.height = '60px';
buttonContainer.appendChild(b_history);

var b_manifest = document.createElement("button");
b_manifest.innerHTML = "Health Information";
b_manifest.className = "btn btn-secondary mb-2";
b_manifest.style.width = '100%';
b_manifest.style.height = '60px';
buttonContainer.appendChild(b_manifest);

var b_settings = document.createElement("button");
b_settings.innerHTML = "Child Care";
b_settings.className = "btn btn-secondary mb-2";
b_settings.style.width = '100%';
b_settings.style.height = '60px';
buttonContainer.appendChild(b_settings);

const slideOpen = document.createElement('button');
slideOpen.id = 'slide-open-button'
slideOpen.innerHTML = '>>'
slideOpen.className = "btn btn-secondary";
slideOpen.style.position = 'absolute';
slideOpen.style.top = '5px';
slideOpen.style.left = '5px';
slideOpen.style.float = 'left';
slideOpen.style.width = '100%';
slideOpen.style.textAlign = 'center';
slideOpen.style.cursor = 'pointer';
slideOpen.style.width = `50px`;
slideOpen.style.height = `38px`;
slideOpen.style.display = 'none'
body.appendChild(slideOpen);


import React from 'react';
import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk';
import './PhotoEditorSDK.css'; // Ensure to import the CSS for styling

class PhotoEditorSDK extends React.Component {
  componentDidMount() {
    this.initEditor();
  }

  async initEditor() {
    const editor = await PhotoEditorSDKUI.init({
      container: '#editor',
      image: '../assets/example.jpg', // Adjust the path based on your assets location
      license: '', // Add your license key here
      theme: 'light',  // from here i am changing the theme i.e colors
      custom: {
        themes: {
          light: {        
            tooltip: {
              background: '#000',
              foreground: 'rgba(255, 255, 255, 0.90)',
            },
            toolbar: {
              background: '#ed563b',
            },
            button: {
              containedPrimaryBackground: '#ed563b',
              containedPrimaryForeground: 'rgba(255, 255, 255, 0.90)',
              outlinedPrimaryBackground: '#242424',
            
              textPrimaryForeground: '#365AFC',
              textSecondaryForeground: 'rgba(255, 255, 255, 0.90)',
              activeForeground: '#365AFC',
              hoverOverlayColor: 'rgba(255, 255, 255, 0.08)',
            },
            canvas: {
              background: '#fff', // i changed the bg color of canvas to white
            },
          },
        },
      },
    });
    console.log('PhotoEditorSDK for Web is ready!');
    editor.on(UIEvent.EXPORT, (imageSrc) => {
      console.log('Exported ', imageSrc);
    });

    // Add drag and drop support
    const dragDropBox = document.getElementById('dragDropBox');
    const dragDropOverlay = document.getElementById('dragDropOverlay');

    dragDropBox.ondragenter = (event) => {
      event.preventDefault();
      dragDropOverlay.classList.add('visible');
    };
    dragDropOverlay.ondragover = (event) => {
      event.preventDefault();
    };
    dragDropOverlay.ondragleave = (event) => {
      event.preventDefault();
      dragDropOverlay.classList.remove('visible');
    };
    dragDropOverlay.ondrop = (event) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      if (files && files.length && files[0].type.match(/image.*/)) {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => editor.setImage(reader.result);
        dragDropOverlay.classList.remove('visible');
      }
    };
  }

  render() {
    return (
      <div id="dragDropBox" style={{ position: 'relative', margin:'auto', width: '85%', height: '500px', backgroundColor: '#fff' }}>
        <div id="dragDropOverlay" className="overlay">Drop files here...</div>
        <div id="editor" style={{ width: '100%', height: '100%' }}></div>
      </div>
    );
  }
}

export default PhotoEditorSDK;

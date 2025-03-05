import './App.css';
import { domToPng } from 'modern-screenshot';

function App() {
  return (
    <>
      <div id="node">Hello world!</div>
      <button
        onClick={() => {
          domToPng(document.getElementById('node')!).then((dataUrl) => {
            const link = document.createElement('a');
            link.download = 'screenshot.png';
            link.href = dataUrl;
            link.click();
          });
        }}
      >
        Screenshot
      </button>
    </>
  );
}

export default App;

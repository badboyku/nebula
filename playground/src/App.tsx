import { Button, ThemeProvider } from 'nebula';
import React from 'react';
import HelloWorld from './components/HelloWorld';
import logoUrl, { ReactComponent as Logo } from './logo.svg';
import 'nebula/dist/assets/fonts/acumin.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';
import './style.scss';
import './styles.css';

const fontDemoText = 'The quick brown fox jumps over the lazy dog';
const fontFallback = 'cursive';
const fonts = [
  'AcuminProBold',
  'AcuminProBoldItalic',
  'AcuminProExtraLight',
  'AcuminProItalic',
  'AcuminProLight',
  'AcuminProRegular',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
];

const App = () => {
  return (
    <ThemeProvider globalStyles={{ body: { margin: 0, padding: 20 } }}>
      <div>
        <h1>Nebula</h1>
        <HelloWorld />
        <img src={logoUrl} className="logo" alt="logo" />
        <Logo width={40} />
        <div>
          <Button label="My Button" variant="outlined" />
        </div>
        <div className="settings-fonts">
          <details>
            <summary>Preview Fonts</summary>
            <div>
              <div>
                {fonts.map((font) => (
                  <div key={font} className="settings-font-row">
                    <div className="settings-font-label">{font}:</div>
                    <div className="settings-font-demo-text" style={{ fontFamily: `${font}, ${fontFallback}` }}>
                      {fontDemoText}
                    </div>
                  </div>
                ))}
              </div>
              <div className="settings-font-row">
                <div className="settings-font-label">Fallback (cursive):</div>
                <div className="settings-font-demo-text" style={{ fontFamily: fontFallback }}>
                  {fontDemoText}
                </div>
              </div>
              <div className="settings-fonts-note">
                Note: If font is not loaded correctly, it will render the fallback (cursive).
              </div>
            </div>
          </details>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

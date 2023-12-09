import { Window, WindowHeader, WindowContent, Button } from 'react95';

function Window1() {
  return (
    <div className="App">
      <Window resizable className="window">
        <WindowHeader className="window-header">
          <span>Cooler Link</span>
          <Button>
            <span className="close-icon">×</span>
          </Button>
        </WindowHeader>
        <WindowContent>
          <p>https://www.youtube.com/watch?v=xvFZjo5PgG0</p>
        </WindowContent>
      </Window>
    </div>
  );
}

export default Window1;
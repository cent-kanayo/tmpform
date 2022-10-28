import Gift from './components/Gift';
import Ticket from './components/Ticket';

function Main() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-16">
      <div className="bgGreen"></div>
      <div className="container">
        <Gift />
        <Ticket />
      </div>
    </div>
  );
}

export default Main;

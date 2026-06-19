import { useFlowiseChat, openChat } from './hooks/useFlowiseChat';
import Header from './components/Header';
import Hero from './components/Hero';
import TryDemo from './components/TryDemo';
import Benefits from './components/Benefits';
import ForClinic from './components/ForClinic';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  useFlowiseChat();

  return (
    <>
      <Header onOpenChat={openChat} />
      <main>
        <Hero onOpenChat={openChat} />
        <TryDemo />
        <Benefits />
        <ForClinic />
        <FinalCTA onOpenChat={openChat} />
      </main>
      <Footer />
    </>
  );
}

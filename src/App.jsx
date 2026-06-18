import { useFlowiseChat, openChat } from './hooks/useFlowiseChat';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import TryDemo from './components/TryDemo';
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
        <ValueProps />
        <ProblemSolution />
        <HowItWorks />
        <TryDemo onOpenChat={openChat} />
        <ForClinic />
        <FinalCTA onOpenChat={openChat} />
      </main>
      <Footer />
    </>
  );
}

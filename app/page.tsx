import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main> 
      <h1 className="text-2xl font-bold">Popular Companions</h1>
      <section className="home-section ">
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="2"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#e5d0ff"
        />
        <CompanionCard
          id="3"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#bde7ff"
        />
      </section>
      <section className="home-section mt-10">
        <CompanionList
          title="Recent Sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page
import { Header } from './components/Header'
import { AboutSection } from './components/AboutSection'
import { WorkExperience } from './components/WorkExperience'
import { SkillsSection } from './components/SkillsSection'
import { ArtGallery } from './components/ArtGallery'
import { CreativeStatement } from './components/CreativeStatement'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'

export default function App() {
  // Using your LinkedIn profile photo for profile and new Pexels photos for other images
  const profileImage = "src/public/pp.jpeg"
  const workspaceImage = "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg"
  const officeImage = "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
  
  // Art gallery images
  const artImages = [
    "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg",
    "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg",
    "https://images.pexels.com/photos/17484975/pexels-photo-17484975.png",
    "https://images.pexels.com/photos/17483867/pexels-photo-17483867.jpeg",
    "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png",
    workspaceImage, // Reusing workspace image for variety
  ]
  
  // Project images
  const projectImages = [
    "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png",
    artImages[0],
    artImages[1],
    artImages[2],
    artImages[3],
    artImages[4],
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header profileImage={profileImage} />
      <AboutSection workspaceImage={workspaceImage} />
      <WorkExperience officeImage={officeImage} />
      <SkillsSection />
      {/* <ArtGallery artImages={artImages} /> */}
      <CreativeStatement />
      <ProjectsSection projectImages={projectImages} />
      <ContactSection contactImage={workspaceImage} />
    </div>
  )
}
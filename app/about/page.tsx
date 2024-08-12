
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Us
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
    
        <p className="text-muted-foreground text-lg py-4">
        Establishment of the Definition of Science: The Emergence of Rakim University

Introduction: Type of laboratory; Since the emergence of the coronavirus, a self-conducted research laboratory for a single individual has used two mobile phones and the internet as its toolset.

My laboratory collects and analyzes data science information from around the world. It is named the Global Research and Data Science Analysis Center. The ancestral home where I reside serves as the address of the laboratory. It is located in the village of Prannathpur, Union No. 6, Santhahar, Bogura District, Rajshahi Division, Bangladesh, in a house called Prince Palace. <br/> <br/>

After proving that the Singularity Theory of all branches of fundamental science has been invalidated, there is no definition of science in any university on Earth. It is the will of the Almighty Allah that He has taught His best creation the definition of science through the activities of this laboratory. In April 2024, the activities of this laboratory were transformed into a university named Rakim University. It is a symbolic, model school and university. When universities around the world will create definitions and curriculums for science based on Rakim’s theory. No theory outside of this university’s theory will be applicable. For example, the theories of Einstein, Hawking, and Max Planck have now become waste—items for the dustbin. The new theory is the Black Hole Field and Anti-Field Twin Theory, Dark Matter or Anti-Field (Anti-Matter) Theory, which always remains invisible. It can be seen through illuminated objects with opposite charges. Similarly, the Twin Universe Theory. COVID-19 has created Black Hole Field and Anti-Field primarily due to the theories of Hawking, Einstein, and Max Planck, which blame human civilization. Analysis and proof of these matters have been created by analyzing data science of civilization from December 20, 2020, to the present. These can be found for free on the Rakim University Facebook page in Bengali. <br/> <br/>

Since I am not a scientist in English literature, there might be some errors, so please understand the meaning in Bengali, friends. The story of scientific theories and creation theories is a comprehensible topic from a literary philosophy. <br/> <br/>

You can find today’s research paper along with all the previous stories on the website of Rakim University. New discoveries are posted daily on Facebook. Enjoy, friends. Rakim University’s current analysis has also been sent to top social media, ranking universities, and thousands of various institutions and personal pages through Facebook articles. These writings are not given to belittle or elevate anyone. <br/> <br/>

Sincerely, <br/> <br/>

Saiful Islam Juboraj <br/>
Student, Scientist, and Founder <br/>
Rakim University


        </p>
      </div>
    </div>
  );
}

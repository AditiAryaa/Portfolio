const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl mt-14">
          Hello,my name is Aditi Arya. I have completed my graduation with
          Bachelor Of Computer Application from Shri Vaishnav Institute Of
          Management (Indore) in 2023.
        </p>
        <br />
        <p className="text-xl">
          I have done Full Stack web Development certification course from
          Physics Wallah , in 2023. I have also earned certificats in
          technologies like HTML , CSS and JavaScript from OpenWeaver in 2023. I
          have Good communication skills in both English and Hindi.
        </p>
      </div>
    </div>
  );
};

export default About;

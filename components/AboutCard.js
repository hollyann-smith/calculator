function AboutCard() {
  return (
    <div
      className="card"
      style={{
        height: '518px', width: '618px', marginTop: '8px', paddingLeft: '8px', paddingRight: '8px',
      }}
    >
      <div className="card-header" style={{ color: 'white' }}>
        <h1>About Me</h1>
      </div>
      <div className="card-body" style={{ textAlign: 'center' }}>
        <div className="card-text"> I began my career in the fashion industry as a Patternmaker/Seamstress, where I honed my skills in creating and crafting. <br /> However, my passion for innovation and problem-solving eventually drew me towards the world of software development. <br />Leveraging my background in creative problem-solving and product building, I enthusiastically transitioned into the tech industry! <br />
          Now, I build full-stack web applications using React, Next.js, JavaScript, Python, Django, and Ruby on Rails, with experience in both Firebase and PostgreSQL backends. <br />I am skilled in crafting responsive UIs, designing relational databases, and deploying applications with tools like Heroku. <br />My foundation in eCommerce and user-centric design continues to inform the intuitive, accessible experiences I strive to build in tech.
        </div>
      </div>
    </div>
  );
}

export default AboutCard;

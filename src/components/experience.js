import styled from 'styled-components'

const Icon = styled.i`
  padding: 9px;
  max-width: fit-content;
`

const Card = styled.div`
background: 
  linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
  linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
  linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
  border-radius: 1em;
  `

function Experience() {
  return (
    <section>
      <h2>Qualifications and Experience</h2>
      <Card className="container flex">
        <div className="p-2">
          <Icon className="fa-solid fa-flask fa-2xl my-2"></Icon>
          <h3>Subject Expertise</h3>
          <p>Specialized in teaching secondary science subjects.</p>
        </div>
        <div className="border-solid border-2 p-2">
          <h3>Teaching Expertise</h3>
          <Icon className="fa-solid fa-person-chalkboard fa-xl my-2"></Icon>
          <p>Proven track record of helping students excel in science.</p>
        </div>
      </Card>
    </section>
  );
}

export default Experience;
import styled from 'styled-components'

const Icon = styled.i`
  padding: 9px;
  max-width: fit-content;
`

function Experience() {
  return (
    <section className="flex flex-col">
      <h2>Qualifications and Experience</h2>
      <div>
        <div className="p-2">
          <Icon className="fa-solid fa-flask fa-3x my-2"/>
          <h3>Subject Expertise</h3>
          <p>Specialized in teaching secondary science subjects.</p>
        </div>
        <div className="p-2">
          <Icon className="fa-solid fa-person-chalkboard fa-3x my-2" />
          <h3>Teaching Expertise</h3>
          <p>Proven track record of helping students excel in science.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
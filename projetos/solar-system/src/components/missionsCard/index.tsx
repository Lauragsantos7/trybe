import missions from '../../data/missions';
function MissionCard() {
    return(
        <>
        {missions.map((mission)=> (
            
            <div key={mission.name}>
               
                <p>{mission.name } </p>
                <p>{mission.year } </p>
                <p>{mission.country } </p>
                <p>{mission.destination } </p>
                </div>

        ))}
        </>
    )
}

export default MissionCard
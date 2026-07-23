import {ActiveCommunitiesQuery} from '../lib/graphql';
import {getActiveCommunities} from '../lib/db';

export const getServerSideProps = async () => {
  const props = await getActiveCommunities();
  return {props};
};


export default function Communities({activeCommunities}: ActiveCommunitiesQuery) {
  return (
    <>
      <h1>Incursion Communities</h1>
      <div className="table-wrap" style={{marginTop: 'var(--sp-5)'}}>
        <table className="data-table">
          <thead>
            <tr>
              <th className="center">VG</th>
              <th className="center">AS</th>
              <th className="center">HQ</th>
              <th className="hidden-xs">Tag</th>
              <th>Name</th>
              <th className="center hidden-xs">Timezone</th>
              <th className="center">Language</th>
              <th className="center">Tank</th>
              <th>Channel</th>
            </tr>
          </thead>
          <tbody>
            {activeCommunities.map((community) => {
              const languages = community.language.split(',');
              const tanks = community.tank.split(',');

              return (
                <tr key={community.name}>
                  <td className="center">{community.vg && <img src={'/images/tick.png'} alt="VG" width={16}/>}</td>
                  <td className="center">{community.as && <img src={'/images/tick.png'} alt="AS" width={16}/>}</td>
                  <td className="center">{community.hq && <img src={'/images/tick.png'} alt="HQ" width={16}/>}</td>
                  <td className="hidden-xs">{community.tag}</td>
                  <td>{community.name}</td>
                  <td className="center hidden-xs">{community.timezone}</td>
                  <td className="center">{languages.map(language => <img key={language} src={`/images/languages/${language}.png`} alt={language} title={language}/>)}</td>
                  <td className="center">{tanks.map(tank => <img key={tank} src={`/images/${tank}.png`} alt={tank} title={tank}/>)}</td>
                  <td>{community.channel}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}


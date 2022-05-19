import React, {useEffect, useState} from 'react';


export default function About() {
  const [mail, setMail] = useState('');

  useEffect(() => {
    setMail('lars.naurath@gmail.com');
  }, []);
  return (
    <>
      <h2>About</h2>
      <div className="colums">
        <p>If you have any feedback, bugs, questions or feature requests, you can contact me through the following channels.</p>
        <table className="table">
          <tbody>
          <tr>
            <td>Reddit:</td>
            <td><a href="http://www.reddit.com/user/Shadowlauch/">Shadowlauch</a></td>
          </tr>
          <tr>
            <td>Ingame:</td>
            <td><span style={{padding: 8}}>MikeRoni (Currently not subbed, if you want to contact me use one of the other methods)</span></td>
          </tr>
          <tr>
            <td>Twitter:</td>
            <td><a href="http://twitter.com/Schattenlauch/">@Schattenlauch</a></td>
          </tr>
          <tr>
            <td>Email:</td>
            <td><a href={`mailto:${mail}`}>{mail}</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

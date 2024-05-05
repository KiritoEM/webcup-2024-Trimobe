const DashboardFirst = () => {
  return (
    <section className="first__section">
      <div className="row">
        <div className="col-8 metatron">
          <div className="metatron-content">
            <h2>Bonjour</h2>
            <div className="content">
              <p>Vous ne savez pas ce que vous cherchez?</p>
              <p>
                Discuter avec <span>Métatron </span>“L’Ange du Savoir” pour vous
                tout savoir
              </p>
              <div className="input-group">
                <input type="text" placeholder="Que voulez-vous?" />
                <button>Envoyer</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 aria">
          <div className="aria-content">
            <p>Dernier Ange consulté</p>
            <h3>Aria</h3>
          </div>
        </div>
        <div className="col-8 command">
          <div className="command-content">
            <h4>Les plus commandés</h4>
            <div className="row">
              <div className="col cmd">
                <div className="cmd-title">
                  <p>Cupidon</p>
                  <p>
                    <img src="/aile.svg" alt="" />
                    <span>79</span>
                  </p>
                </div>
                <div className="cmd-img">
                  <img src="/angel4.webp" alt="" className="image" />
                </div>
              </div>
              <div className="col cmd">
                <div className="cmd-title">
                  <p>Gabriel</p>
                  <p>
                    <img src="/aile.svg" alt="" />
                    <span>67</span>
                  </p>
                </div>
                <div className="cmd-img">
                  <img src="/angel3.webp" alt="" className="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 discu">
          <div className="discu-content">
            <h4>Discussions</h4>
            <div className="content">
              <div className="item">
                <div className="avatar">
                  <img src="/avatar2.webp  " alt="" />
                  <div className="text">
                    <h5>Jazmyne</h5>
                    <p>See you good bye</p>
                  </div>
                </div>
                <div className="time">
                  <p>12:00</p>
                </div>
              </div>
              <div className="item">
                <div className="avatar">
                  <img src="/avatar.webp  " alt="" />
                  <div className="text">
                    <h5>Madina Bonu</h5>
                    <p>consequatur minima iure</p>
                  </div>
                </div>
                <div className="time">
                  <p>12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardFirst;

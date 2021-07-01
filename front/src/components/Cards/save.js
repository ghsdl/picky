{genreDetails==='movie'&&(
  <Modal     
  isOpen={modalIsOpen}
  onAfterOpen={afterOpenModal}
  onRequestClose={closeModal}
  style={{overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)"}}}
  className="modal"
  >
    <div className="pickyDetails">
      <h1 className="pickyDetails-title">
        {details.title}
      </h1>
      { genreOf &&(
        <p className="pickyDetails-genre">
          Genre : <span className="boldChar">{genreOf}</span>
        </p>
      )}
      { details.production_year &&(
        <p className="pickyDetails-release"> 
           Année: <span className="boldChar">{details.production_year}</span>
        </p>
      )}

      { details.director &&(
        <p className="pickyDetails-director">
          Réalisteur: <span className="boldChar">{details.director}</span>
        </p>
      )}
    
      { details.trailer &&(
      
        <Youtube videoId={details.trailer} className="pickyDetails-trailer"/>
      
      )}
      { !details.trailer &&  (
        <div className="pickyDetails-poster">
          {details.backdrop}
        </div>
      )}
      { !details.trailer && !details.backdrop &&(
        <div className="pickyDetails-noImage">
          {logoPicky}
        </div>
      )}
      <p className="pickyDetails-synopsis">
        {details.synopsis}
      </p>

    </div>
  </Modal>
   )}

  {genreDetails==='show'&&(
    <Modal     
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={{overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)"}}}
    className="modal"
    >
    <div className="pickyDetails">
      <h1 className="pickyDetails-title">
        {details.title}
        {console.log('details', details)}
      </h1>
      <p className="pickyDetails-nbSeasonEpisod">
      Nombre de saison : {details.seasons} &nbsp; &nbsp; Nombre d'épisodes : {details.episodes}
      </p>
      { finalGenre &&(
        <p className="pickyDetails-genre">
          Genre : <span className="boldChar">{finalGenre}</span>
        </p>
      )}
      { details.creation &&(
        <p className="pickyDetails-release"> 
           Année: <span className="boldChar">{details.creation}</span>
        </p>
      )}              
      { details.next_trailer &&(
      
        <Youtube videoId={details.next_trailer} className="pickyDetails-trailer"/>
      
      )}
      { !details.next_trailer && images && (
        <div className="pickyDetails-poster">
          <img src={images} alt></img>
        </div>
      )}
      { !details.next_trailer && !images &&(
        <div className="pickyDetails-noImage">
          {logoPicky}
        </div>
      )}
      <p className="pickyDetails-synopsis">
        {details.description}
      </p>

    </div>
  </Modal>
   )}
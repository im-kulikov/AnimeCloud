// MARK: - Рендеринг тайтла

function SetTitle() {
    let title = lastTitles[0];

    let name = titleName(lastTitles[0].title);
    let origName = titleOriginalName(lastTitles[0].title);
    let ep = seriesFromTitle(lastTitles[0].title);

    ReactDOM.render(
    <div class="card__full-n">
        <div class="card__full">
                    <div className="card__flex">
                        <div class="col-md-4">
                        <h2>{name}</h2>
                        <h3>{origName}</h3>
                            <img src={title.urlImagePreview}></img>
                        </div>
                        <div class="col-md-8">
                            <div>
                            <h5>Год выхода: <small>{title.year}</small></h5>
                            <h5>Жанр: <small>{title.genre}</small></h5>
                            <h5>Тип: <small>{title.type}</small></h5>
                            <h5>Режиссер: <small>{title.director}</small></h5>
                            <h5>Серии: <small>{ep}</small></h5>
                                <h5>Сюжет</h5>
                                {lastTitles[0].description}
                            </div>
                        </div>
                    </div>
                    <div id="web-player" class="player"></div>
            </div>
        </div>,
        document.getElementById("view")
    );

    loadPlaylist();
}

// MARK: - Рендеринг Элементов Списка

function RenderList() {
    
    ReactDOM.render(
        <div class="anime__list">
                {lastTitles.map((val, index) =>{
                    let name = titleName(val.title);
                    let originalName = titleOriginalName(val.title);
                    let series = seriesFromTitle(val.title);
                    let link = "?id=" + val.id;

                    return <TitleCard link={link} title={name} original={originalName} series={series} image={val.urlImagePreview}></TitleCard>
                })}
                { () => {
                    if (getPageType() == "last") {
                        return <button type="button" class="btn btn__blue" onclick={loadPage()}>Загрузить больше</button>
                    }
                    return
                }  
                }
        </div>,
        document.getElementById("view")
        
    )
}
function TitleCard(props) {
    return <div class="anime__card">
        <a href={props.link}>
                <div class="card">
                    <img src={props.image} class="card__img" alt={props.title}></img>
                    <div class="card__body">
                        <h5 class="card__title">{props.title}</h5>
                        <h6 class="card__original">{props.original}</h6>
                        <p class="card__series">{props.series}</p>
                    </div>
                </div>
                </a>
            </div>;
}
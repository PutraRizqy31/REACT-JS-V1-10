import Listsiswa from "./Listsiswa";

function Siswa() {

    const nama = ['Ariz','RIEZZZ','Riz']

    return (
        <div className="App">
            <Listsiswa judul={nama}/>
        </div>
    );
}

export default Siswa;
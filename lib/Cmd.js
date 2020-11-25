biarkan axios = membutuhkan ('axios']. default;
function foreach (arr, func) {
  untuk (var i in arr) {
    func (i, arr [i]);
  }
}
pencarian fungsi asinkronYoutube (kata kunci) {
    biarkan permintaan = menunggu axios.get ("https://www.youtube.com/results", {
        params: {
            "search_query": kata kunci,
            "disable_polymer": 1
        }
    });
    biarkan body = request.data;
    if (body.substring (0,92) == '<! doctype html> <html style = "font-size: 10px; font-family: Roboto, Arial, sans-serif;" lang = "') {
        biarkan halaman = String (body);
        biarkan pageSource = page.split (",");
        biarkan id = [];
        biarkan idIndex = 0;
        untuk (biarkan indeks di pageSource) {
            if (pageSource [index] .substring (0, 10) == '"videoId":' && pageSource [index] .length == 23) {
                idIndex ++;
                jika (idIndex% 2) {
                    id.push (pageSource [index] .substring (11, pageSource [index] .length - 1));
                };
            };
        };
        kembali id;
    }
    lain {
        biarkan halaman = String (body);
        biarkan pageSource = page.split ("");
        biarkan id = [];
        biarkan idIndex = 0;
        untuk (biarkan index = 0; index <pageSource.length; index + = 1) {
            elemen = sumber halaman [indeks];
            if (element.substring (0,15) == 'href = "/ watch? v =' && element.length == 27) {
                idIndex ++;
                jika (idIndex% 2) {
                    id.push (element.substring (15, element.length -1));
                };
            };
        };
        kembali id;
    };
};

exports.searchYoutube = searchYoutube;

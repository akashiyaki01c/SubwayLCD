// See https://aka.ms/new-console-template for more information
using System.Text.Json;
using System.Text.Encodings.Web;
using System.Text.Unicode;

{}

var stationData = new Dictionary<string, StationInfo>();
var typeData = new Dictionary<string, TypeInfo>();

using (var reader = new StreamReader("station.csv"))
foreach (var row in reader.ReadToEnd().Split('\n'))
{
    var cells = row.Split('\t');
    stationData.Add(cells[0], 
    new(cells[1], cells[2], cells[3], cells[4], cells[5], cells[6], cells[7], cells[8], cells[9], cells[10], cells[11]));
}

using (var reader = new StreamReader("type.csv"))
foreach (var row in reader.ReadToEnd().Split('\n'))
{
    var cells = row.Split('\t');
    typeData.Add(
        cells[0],
        new(cells[1], cells[2], cells[3], cells[4], cells[5], cells[6], cells[7], cells[8], cells[9])
    );
}

var options = new JsonSerializerOptions();
options.Encoder = JavaScriptEncoder.Create(UnicodeRanges.All);
// options.WriteIndented = true;

using (var writer = File.Open("../station.json", FileMode.Create))
JsonSerializer.Serialize<Dictionary<string, StationInfo>>(
    writer, 
    stationData,
    options    
);

using (var writer = File.Open("../type.json", FileMode.Create))
JsonSerializer.Serialize<Dictionary<string, TypeInfo>>(
    writer, 
    typeData,
    options    
);


record StationInfo(
    string JaName, 
    string HiraganaName, 
    string EnName,
    string ZhName, 
    string KoName, 
    string StaNo, 
    string JaSubName,
    string HiraganaSubName,
    string StaNoType,
    string Sta6DisplayJa,
    string Remarks
);

record TypeInfo(
    string JaName,
    string JaShortName,
    string HiraganaName,
    string EnName,
    string EnShortName,
    string ZhName,
    string KoName,
    string Color,
    string Remarks
);
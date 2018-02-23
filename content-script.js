/** 
 * Script inject download PNG image button into Spreadshirt
 * 
*/
var articleTileList = $("#articleTileList");
// Search theo keyword
if(articleTileList.length > 0)
{
    var modelImage = $(".gridTile");
    $(modelImage).each(function(index,value){
        var elArticle = $(value).children('.article');
        var designId = $(elArticle).data('designid');
        var designName = $(elArticle).children('.articleName').text().toLowerCase();
        designName = designName.replace(/ /g, '-');
        var urlPNG = "https://image.spreadshirtmedia.com/image-server/v1/designs/"+ designId +",width=600,height=600/"+designName+".png";
        var imgDownloadIcon = "<img src='https://www.acinebraska.org/wp-content/uploads/2015/11/download-icon.png' class='extIcoDownload' />"
        var aTagDownload = '<a href="'+ urlPNG + '" download="'+designName+'" >'+imgDownloadIcon+' Download</a>';

        $(value).append(aTagDownload)
    })
} 

// Detail Product

if($("#designInfo").length > 0)
{
    var designInfo = $("#designInfo");
    var srcImg = designInfo.children('img').attr('src');
    srcImg = srcImg.replace('mp/','');
    srcImg = srcImg.replace("width=178","width=600");
    srcImg = srcImg.replace("height=178","height=600");
    var titleHeader = $("#detail-header");
    var designName = $(titleHeader).children('.headline').text();
    var imgDownloadIcon = "<img src='https://www.acinebraska.org/wp-content/uploads/2015/11/download-icon.png' class='extIcoDownload' />"
    var aTagDownload = '<a href="'+ srcImg + '" download="'+designName+'" >'+imgDownloadIcon+' Download</a>';
    $(titleHeader).prepend(aTagDownload);
}
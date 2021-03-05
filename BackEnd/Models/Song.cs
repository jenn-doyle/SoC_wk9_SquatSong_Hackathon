using System.ComponentModel.DataAnnotations;
public class Song
{
    public long? Id { get; set; }
    public string Title { get; set; }
    public string Artist { get; set; }
    public string TimeStamp { get; set; }
    public string Link { get; set; }
    public string SuggestedBy { get; set; }
}
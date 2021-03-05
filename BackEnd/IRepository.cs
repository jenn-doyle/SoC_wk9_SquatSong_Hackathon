using System.Collections.Generic;
using System.Threading.Tasks;
using System.Numerics;


public interface IRepository<T>
{
    Task<T> Get(int slc);

    //Task<T> Update(T t);
    Task<T> Insert(string Title, string Artist, int SongLengthCode, string Link, string SuggestedBy);

}
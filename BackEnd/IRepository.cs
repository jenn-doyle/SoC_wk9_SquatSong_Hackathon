using System.Collections.Generic;
using System.Threading.Tasks;
using System.Numerics;


public interface IRepository<T>
{
    IEnumerable<MoQuotePlusSong> GetAll();
    Task<T> Get(int slc);
    Task<T> Update(MoQuotePlusSong song);
    Task<T> Insert(MoQuotePlusSong songObject);

}
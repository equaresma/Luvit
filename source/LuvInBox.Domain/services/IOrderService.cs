using com.luvinbox.domain.dtos;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services {
    public interface IOrderService {
        Task<string> Post(OrderDTO order);
    }
}

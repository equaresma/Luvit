using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;

namespace com.luvinbox.infra.mapping
{
    public class DtoToEntityProfile : Profile
    {
        public DtoToEntityProfile()
        {
            CreateMap<User, UserDTO>().ReverseMap();
            CreateMap<Login, LoginDTO>().ReverseMap();
            CreateMap<Customer, CustomerDTO>().ReverseMap();
            CreateMap<Vendor, VendorDTO>().ReverseMap();
            CreateMap<VendorContact, VendorContactDTO>().ReverseMap();
            CreateMap<Product, ProductDTO>().ReverseMap();
            CreateMap<Category, CategoryDTO>().ReverseMap();
            CreateMap<Order, OrderDTO>().ReverseMap();
            CreateMap<OrderItem, OrderItemDTO>().ReverseMap();
            CreateMap<Size, SizeDTO>().ReverseMap();
        }
    }
}

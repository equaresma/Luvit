using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model
{
    public class DynamicDisplayFormatAttribute : DisplayFormatAttribute
	{
		public DynamicDisplayFormatAttribute()
		{
			DataFormatString = GetInfoFromResource.GetDateFormat();
		}

        private class GetInfoFromResource
        {
			public static string GetDateFormat()
			{
				return AppRes.frmDateDataN;
			}
		}
    }
}

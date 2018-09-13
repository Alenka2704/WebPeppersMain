using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MainProject.Models
{
	public class IndexViewModel
	{
		List<string> inputLists = new List<string>();

		public IndexViewModel(List<string> inputs)
		{
			inputLists = inputs;
		}

		public List<List<int>> ParseInput()
		{
			return inputLists.Select(item => item.Trim().Replace(String.Format("{0}{0}", Environment.NewLine), Environment.NewLine).Split(Environment.NewLine).Select(item1 => int.Parse(item1)).ToList()).ToList();

		}
	}
}

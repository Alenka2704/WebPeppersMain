using System;
using System.Collections.Generic;
using System.Linq;
using ComponentLibrary.ViewComponents;
using Microsoft.AspNetCore.Mvc;

namespace MainProject.Controllers
{
	public class HomeController : Controller
	{
		private readonly ListViewComponent _listComponent;

		public HomeController(ListViewComponent listComponent)
		{
			_listComponent = listComponent;
		}

		public IActionResult Calculate(string inputs)
		{
			List<List<int>> lists = inputs.Split(';').ToList().Select(item => item.Trim().Replace(string.Format("{0}{0}", Environment.NewLine), Environment.NewLine).Split(Environment.NewLine).Select(item1 => int.Parse(item1)).ToList()).ToList();
			return View("Index", _listComponent.Invoke(lists));
		}

		public IActionResult Index()
		{
			return View();
		}
	}
}

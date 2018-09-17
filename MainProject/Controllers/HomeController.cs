using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MainProject.Models;
using ComponentLibrary.ViewComponents;

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
			return View("Index",_listComponent.Invoke((new IndexViewModel(inputs.Split(';').ToList())).ParseInput()));
		}
		public IActionResult Index()
		{
			return View();
		}
	}
}

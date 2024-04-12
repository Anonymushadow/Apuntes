using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14_Getters__and__Setters
{
    internal class Movie
    {
        public string title;
        public string director;
        private int rating;
        public Movie(string Atitle, string Adirector, int Arating) {
            title = Atitle;
            director = Adirector;
            Rating = Arating;
        }

        public int Rating{
            get { 
                return rating;
            }
            set {
                if(value < 11 || value > 0) {
                    rating = value;
                }
                else
                {
                    rating = 5;
                }
            }
        }
    }
}

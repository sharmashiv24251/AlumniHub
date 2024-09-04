import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const AlumniDirectoryLayout = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.alumni);

  const [searchQuery, setSearchQuery] = useState({
    name: "",
    year: "",
    course: "",
  });

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filteredResults = useMemo(() => {
    return searchResults.filter((result) => {
      const { name, year, course } = searchQuery;
      return (
        result.name.toLowerCase().includes(name.toLowerCase()) &&
        (year === "" || result.year === parseInt(year)) &&
        (course === "" || result.course === course)
      );
    });
  }, [searchQuery, searchResults]);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Alumni Search</h1>
        <p className="text-muted-foreground">
          Find and connect with alumni from your university.
        </p>
      </div>
      <div className="mb-8">
        <form className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex-1">
            <Input
              id="name"
              name="name"
              placeholder="Enter name"
              value={searchQuery.name}
              onChange={handleSearch}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <Select
              value={searchQuery.year}
              onValueChange={(value) =>
                setSearchQuery((prev) => ({ ...prev, year: value }))
              }
              className="w-full"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2018">Batch of 2018</SelectItem>
                <SelectItem value="2020">Batch of 2020</SelectItem>
                <SelectItem value="2016">Batch of 2016</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select
              value={searchQuery.course}
              onValueChange={(value) =>
                setSearchQuery((prev) => ({ ...prev, course: value }))
              }
              className="w-full"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTech">BTech</SelectItem>
                <SelectItem value="MTech">MTech</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Button type="submit" className="w-full sm:w-auto mt-4 sm:mt-0">
              Search
            </Button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredResults.map((result) => (
          <Card key={result.id} className="flex-row h-auto">
            <Link to={"/profile/" + result.id + "/"}>
              <div className="flex-1">
                <CardHeader className="flex flex-row gap-4 items-center">
                  <Avatar className="w-14 h-14">
                    {result.profileImage ? (
                      <AvatarImage
                        src={result.profileImage}
                        alt={result.name}
                      />
                    ) : (
                      <AvatarFallback>{result.name.charAt(0)}</AvatarFallback>
                    )}
                  </Avatar>
                  <CardTitle>{result.name}</CardTitle>
                </CardHeader>
                {result.job && result.company && (
                  <CardFooter className="flex flex-col gap-2 items-start">
                    <p>
                      {result.course} - {result.branch} ({result.year})
                    </p>
                    <p className="text-muted-foreground">
                      {result.job} at {result.company}
                    </p>
                  </CardFooter>
                )}
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AlumniDirectoryLayout;

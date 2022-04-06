cmake_minimum_required(VERSION 3.0)

project(genetic-task)
set(LIBS lib/dependencies.cpp lib/line.cpp lib/scope.cpp lib/source_code.cpp lib/utils.cpp lib/words.cpp)
#set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fopenmp")
set(CMAKE_CXX_STANDARD 17)
add_executable(genetic-task main.cpp ${LIBS})
install(TARGETS genetic-task RUNTIME DESTINATION bin)

cmake_minimum_required(VERSION 3.0)

project(genetictask)
set(LIBS lib/dependencies.cpp lib/scope.cpp lib/source_code.cpp lib/utils.cpp)
add_executable(genetictask main.cpp ${LIBS})
install(TARGETS genetictask RUNTIME DESTINATION bin)

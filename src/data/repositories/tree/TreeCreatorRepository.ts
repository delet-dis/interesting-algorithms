import TreeCreatorInterface from "@/data/interfaces/tree/TreeCreatorInterface"
import Node from "@/data/models/tree/Node"
import node from "@/data/classes/tree/node";
import CSVParserInterface from "@/data/interfaces/tree/csv/CSVParserInterface";
import CSVParserRepository from "@/data/repositories/tree/csv/CSVParserRepository";
class TreeCreatorRepository implements TreeCreatorInterface {
    private static instance: TreeCreatorRepository

    public static getInstance(): TreeCreatorRepository {
        if (!TreeCreatorRepository.instance) {
            TreeCreatorRepository.instance = new TreeCreatorRepository()
        }

        return TreeCreatorRepository.instance
    }

    createTree(inputData: string): Node[] | null {
        const data:string[][]=CSVParserRepository.getInstance().parseInputData(inputData)
        const root:node=new node(data,0)
        root.createNewNodes()
        return null
    }
}

export default TreeCreatorRepository

import TreeCreatorInterface from "@/data/interfaces/tree/TreeCreatorInterface"
import DisplayingNode from "@/data/models/tree/DisplayingNode"
import Node from "@/data/classes/tree/Node";
import CSVParserRepository from "@/data/repositories/tree/csv/CSVParserRepository";
class TreeCreatorRepository implements TreeCreatorInterface {
    private static instance: TreeCreatorRepository

    public static getInstance(): TreeCreatorRepository {
        if (!TreeCreatorRepository.instance) {
            TreeCreatorRepository.instance = new TreeCreatorRepository()
        }

        return TreeCreatorRepository.instance
    }

    createTree(inputData: string): DisplayingNode | null {

        const data:string[][]|null=CSVParserRepository.getInstance().parseInputData(inputData)
        if(data!=null){
        const root:Node=new Node(data,0)
        root.createNewNodes()
        const rootOfTree:DisplayingNode=root.convert()
            return rootOfTree
        }
        return null
    }
}

export default TreeCreatorRepository

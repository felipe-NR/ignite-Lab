import { Lesson } from "./Lesson";

export function Sidebar() {
    return(
        <aside className="w-[21.75rem] bg-gray-700 border-l p-6 border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-gray-500 block">
            Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                <Lesson/>
                <Lesson/>
                <Lesson/>
                <Lesson/>
                <Lesson/>
                <Lesson/>
            </div>
        </aside>
    ) 
}